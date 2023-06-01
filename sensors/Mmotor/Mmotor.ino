#define BLYNK_TEMPLATE_ID "TMPLHjW5kx76"
#define BLYNK_TEMPLATE_NAME "vhs"
#define BLYNK_AUTH_TOKEN "WcLMWNNCSy-kn-lsgWYdhTBoe78OPG9n"
#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

char ssid[] = "Snehal";
char pass[] = "Snehal@25";
#define motor D1
int resval = 0;  // holds the value
int respin = A0; // sensor pin used

void setup() {
  Serial.begin(9600);
  
  pinMode(motor, OUTPUT);
  digitalWrite(motor, LOW);
  Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
  digitalWrite(motor, LOW);
}

void loop()
{
resval = analogRead(respin); //Read data from analog pin and store it to resval variable
   Blynk.virtualWrite(V0, resval);
  if (resval<=5){ 
    Serial.println("Water Level: Empty"); 
    } 
    else if (resval>5 && resval<=580)
    { 
      Serial.println("Water Level: Low"); 
      Blynk.logEvent("empty", "Turn on the motor");
    } 
    
    else if (resval>800){ 
    Serial.println("Water Level: High"); 
    Blynk.logEvent("full", "Turn off the motor");
  }
  delay(1000); 
  
  Blynk.run();
}

BLYNK_WRITE(V2) // V5 is the number of Virtual Pin  
{
    int pinValue = param.asInt();
    digitalWrite(motor, pinValue);
}
