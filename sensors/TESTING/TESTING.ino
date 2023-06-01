#define BLYNK_TEMPLATE_ID "TMPLl35e8uPp"
#define BLYNK_DEVICE_NAME "Relay"
#define BLYNK_AUTH_TOKEN "mLnphrE2kXLQ1nS76icms2FMXTxbrYi2"
#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

char ssid[] = "Snehal";
char pass[] = "Snehal@25";
#define bulb D4
#define fan D0

void setup() {
  Serial.begin(9600);
  pinMode(bulb,OUTPUT);
  pinMode(fan, OUTPUT);
  digitalWrite(bulb, LOW);
  digitalWrite(fan, LOW);
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  digitalWrite(bulb, LOW);
  digitalWrite(fan, LOW);
}

void loop()
{
  Blynk.run();
}

BLYNK_WRITE(V0) // V5 is the number of Virtual Pin  
{
    int pinValue = param.asInt();
    Serial.print(pinValue);
    digitalWrite(bulb, pinValue);

    if (pinValue == 0)
    {
      delay(30000);
      Blynk.notify("Button band karo"); 
      Blynk.logEvent("button_band_karo", "Button band karo");
      digitalWrite(bulb, pinValue+1);
    } 
}

BLYNK_WRITE(V1) // V5 is the number of Virtual Pin  
{
    int pinValue = param.asInt();
    digitalWrite(fan, pinValue);
}
