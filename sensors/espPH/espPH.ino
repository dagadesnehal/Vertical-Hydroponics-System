#define BLYNK_TEMPLATE_ID "TMPLl35e8uPp"
#define BLYNK_DEVICE_NAME "Relay"
#define BLYNK_AUTH_TOKEN "mLnphrE2kXLQ1nS76icms2FMXTxbrYi2"
#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h>
#include <BlynkSimpleEsp8266.h>

char ssid[] = "Snehal";
char pass[] = "Snehal@25";
String sensorValue;
BlynkTimer timer; 

void myTimer() 
{
  // This function describes what will happen with each timer tick
  // e.g. writing sensor value to datastream V5
  Blynk.virtualWrite(V4, sensorValue);  
}

void setup() {
    Serial.begin(9600);
    Blynk.begin(BLYNK_AUTH_TOKEN, ssid, pass);
    timer.setInterval(100L, myTimer); 
}

void loop() { // run over and over
    if (Serial.available()) {
        sensorValue = Serial.readString();
        Serial.println(sensorValue);
    
        
    
    }


    
   
    
    Blynk.run();
    timer.run(); 
}

//BLYNK_WRITE(V4) // V5 is the number of Virtual Pin  
//{
//    float value = Serial.read();
//    Serial.println("*********");
//    Serial.println(value);
//    Serial.println("*********");
//    digitalWrite(V4, value);
//}
