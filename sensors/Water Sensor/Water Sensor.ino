/*Water level monitoring system with the New Blynk app
   https://srituhobby.com
*/
#define BLYNK_TEMPLATE_ID "TMPLHjW5kx76"
#define BLYNK_TEMPLATE_NAME "vhs"
#define BLYNK_AUTH_TOKEN "WcLMWNNCSy-kn-lsgWYdhTBoe78OPG9n"

#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

char auth[] = BLYNK_AUTH_TOKEN;//Enter your Auth token
char ssid[] = "Snehal";//Enter your WIFI name
char pass[] = "Snehal@25";//Enter your WIFI password

BlynkTimer timer;

// Define the component pins
#define trig D5
#define echo D6

//Enter your tank max value(CM)
int MaxLevel = 9;


void setup() {
  Serial.begin(9600);
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
  Blynk.begin(auth, ssid, pass, "blynk.cloud", 80);
  timer.setInterval(100L, ultrasonic);
}

//Get the ultrasonic sensor values
void ultrasonic() {
  digitalWrite(trig, LOW);
  delay(1000);
  digitalWrite(trig, HIGH);
  delay(1000);
  digitalWrite(trig, LOW);
  float t = pulseIn(echo, HIGH);
//  Serial.println(t);
  float distance = t / 29 / 2;
  
float blynkDistance = 100 - distance*MaxLevel;
  Serial.println(distance);
  Serial.println(blynkDistance);
    if (distance <= MaxLevel) {
  Blynk.virtualWrite(V1, blynkDistance);
    } else {
      Blynk.virtualWrite(V1, 0);
    }


  if (distance > 7 ) {
    Blynk.logEvent("empty", "Tank is almost empty!!! ");
  }  else if(distance < 3) {
    Blynk.logEvent("full", "Tank is almost Full !!!!");
  }

}
  void loop() {
    Blynk.run();//Run the Blynk library
    timer.run();//Run the Blynk timer
  }
