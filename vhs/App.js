import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image,Platform,Button } from 'react-native';
import Home from './screen/Home';
import Plant from './screen/Plant';
import Plant1 from './screen/Plant1';
import Plant2 from './screen/Plant2';
import MainC from './navigation/MainC';
import MonitorP1 from './screen/MonitorP1';
import MonitorP2 from './screen/MonitorP2';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './screen/BottomNavigator';
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
const Stack = createNativeStackNavigator();



Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("token", token);

  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  const data = {
    "token" : token,
  }

  fetch("http://192.168.182.225:5000/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), 
  });
  return token;
}
export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => setExpoPushToken(token));

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  


  return (


    
    <NavigationContainer>
      <Stack.Navigator style={styles.cont}>


        <Stack.Screen name="Vertical Hydroponics System" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Bottomnavigator" component={BottomNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Plant" component={Plant} options={{ headerShown: false }} />
        <Stack.Screen name="Plant1" component={Plant1} options={{
          headerShown: false,
          navigationOptions: {
            headerBackground: () => (
              <Image
                // style={StyleSheet.absoluteFill}
                source={{ uri: 'https://cdn-icons-png.flaticon.com/128/9584/9584966.png' }}
              />
            ),
          }
        }} />
        <Stack.Screen name="Plant2" component={Plant2} options={{ headerShown: false }} />
        <Stack.Screen name="MainC" component={MainC} options={{ headerShown: false }} />
        <Stack.Screen name="MonitorP1" component={MonitorP1} options={{ headerShown: false }} />
        <Stack.Screen name="MonitorP2" component={MonitorP2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37B336',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cont: {
    backgroundColor: '#37B336'
  },
  Plant1: {
    borderRadius: 20,

  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
