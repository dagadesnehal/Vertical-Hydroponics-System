const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

var token;

app.post("/register", (req, res) => {
  console.log(req.body.token);
  token = req.body.token;
  res.send("token");
});

var firstNotify = true
const firstThreshold = 5
const firstApiUrl = "https://blynk.cloud/external/api/get?token=mLnphrE2kXLQ1nS76icms2FMXTxbrYi2&dataStreamId=3";
const firstPauseNotifyDuration = 30000 // (30 sec) time for which it stops sending notifications

var secondNotify = true
const secondThreshold = 20
const secondApiUrl = "https://blynk.cloud/external/api/get?token=mLnphrE2kXLQ1nS76icms2FMXTxbrYi2&dataStreamId=5";
const secondPauseNotifyDuration = 30000;

var thirdNotify = true
const thirdThreshold = -5
const thirdApiUrl = "https://blynk.cloud/external/api/get?token=mLnphrE2kXLQ1nS76icms2FMXTxbrYi2&dataStreamId=7";
const thirdPauseNotifyDuration = 30000;

const intervalDuration = 1000; // (1sec) time after which it checks the api response.

const getResponse = async (apiUrl) => {
  const response = await axios.get(apiUrl);
  return response.data;
};

const sendNotification = async (msg) => {
  data = {
    to: token,
    sound: "default",
    body: msg,
  };
  await axios.post("https://exp.host/--/api/v2/push/send", data);
};

const main = async () => {
  if (token !== undefined) {

    if (firstNotify) {
      const responseData = await getResponse(firstApiUrl);
      if (responseData > firstThreshold) {
        firstNotify = false;
        const message = `Water level: Above Threshold`; // message to be sent in the notification
        await sendNotification(message);
        setTimeout(() => {
          firstNotify = true;
        }, firstPauseNotifyDuration);
        console.log("First Sent");
      } else {
        console.log("First Under Threshold");
      }
    } 
    else if(!firstNotify) {
      console.log("First Notification already sent. Waiting for delay to expire.");
    }

    if(secondNotify){
      const responseData = await getResponse(secondApiUrl);

      if (responseData > secondThreshold) {
        secondNotify = false;
        const message = `PH: Above Threshold`;
        await sendNotification(message);
        setTimeout(() => {
          secondNotify = true;
        }, secondPauseNotifyDuration);
        console.log("Second Sent");
      } else {
        console.log("Second Under Threshold");
      }
    }
    else if(!secondNotify){
      console.log("Second Notification already sent. Waiting for delay to expire.");
    }


    if (thirdNotify) {
      const responseData = await getResponse(thirdApiUrl);

      if (responseData > thirdThreshold) {
        thirdNotify = false;
        const message = `Temp: Threshold Matched`;
        await sendNotification(message);
        setTimeout(() => {
          thirdNotify = true;
        }, thirdPauseNotifyDuration);
        console.log("Third Sent");
      } else {
        console.log("Third not under Threshold");
      }
    } else if (!thirdNotify) {
      console.log(
        "Third Notification already sent. Waiting for delay to expire."
      );
    }

  }
  else {
    console.log("Token is undefined");
  }
};

setInterval(main, intervalDuration);

app.listen(5000, () => {
  console.log("Server Started!!");
});