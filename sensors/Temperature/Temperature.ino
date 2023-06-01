#define BLYNK_TEMPLATE_ID "TMPLl35e8uPp"
#define BLYNK_TEMPLATE_NAME "Relay"
#define BLYNK_AUTH_TOKEN "mLnphrE2kXLQ1nS76icms2FMXTxbrYi2"

#define BLYNK_PRINT Serial
#include <ESP8266WiFi.h> 
#include <BlynkSimpleEsp8266.h>

#include "DHT.h"

DHT dht;

char auth[] = BLYNK_AUTH_TOKEN;

char ssid[] = "Snehal";  // type your wifi name
char pass[] = "Snehal@25";  // type your wifi password

BlynkTimer timer;

void setup()
{
  Serial.begin(9600);
  Serial.println();
  Serial.println("Status\tHumidity (%)\tTemperature (C)\t(F)");
  dht.setup(D1);   /* D1 is used for data communication */
  Blynk.begin(auth, ssid, pass);
  timer.setInterval(100L, sendSensor);
}

void loop()
{
  delay(dht.getMinimumSamplingPeriod()); /* Delay of amount equal to sampling period */
//  float humidity = dht.getHumidity();/* Get humidity value */
//  float temperature = dht.getTemperature();/* Get temperature value */
//  Blynk.virtualWrite(V5, temperature);
//  Blynk.virtualWrite(V6, humidity);
//  Serial.print(dht.getStatusString());/* Print status of communication */
//  Serial.print("\t");
//  Serial.print(humidity, 1);
//  Serial.print("\t\t");
//  Serial.print(temperature, 1);
//  Serial.print("\t\t");
//  Serial.println(dht.toFahrenheit(temperature), 1);/* Convert temperature to Fahrenheit units */
  Blynk.run();
  timer.run();
}

void sendSensor()
{
  float humidity = dht.getHumidity();/* Get humidity value */
  float temperature = dht.getTemperature();/* Get temperature value */

  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Blynk.virtualWrite(V5, temperature);
  Blynk.virtualWrite(V6, humidity);
  if (temperature > 28 ) {
    Blynk.logEvent("temp_alert", "Turn ON the Fan");
  }  else if(temperature < 20) {
    Blynk.logEvent("temp", "Turn OFF the Fan");
  }

  if (humidity > 40 ) {
    Blynk.logEvent("hum_alert", "Turn ON the Fan");
  }  else if(humidity < 20) {
    Blynk.logEvent("hum", "Turn OFF the Fan");
  }
  Serial.print(dht.getStatusString());/* Print status of communication */
  Serial.print("\t");
  Serial.print(humidity, 1);
  Serial.print("\t\t");
  Serial.print(temperature, 1);
  Serial.print("\t\t");
  Serial.println(dht.toFahrenheit(temperature), 1);/* Convert temperature to Fahrenheit units */
  }
