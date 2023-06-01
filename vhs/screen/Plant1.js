import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View,ImageBackground, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Plant from './Plant';
const image = {uri: 'https://i.pinimg.com/originals/44/d6/e1/44d6e12ef1bd0d09fe16942701214c29.jpg'};
const Plant1 = ({ navigation }) => {
  const [humidity, setHumidity] = useState("");
  const [ph, setph] = useState("");
  const [water, setwater] = useState("");

  useEffect(() => {

    axios.get("https://blynk.cloud/external/api/get?token=mLnphrE2kXLQ1nS76icms2FMXTxbrYi2&dataStreamId=5",
      {
      })
      .then(function (response) {
        setHumidity(response.data)
        console.log("my BOOK", response.data)
      }).then(
    )
      .catch(function (error) {
      });


    axios.get("https://blynk.cloud/external/api/get?token=mLnphrE2kXLQ1nS76icms2FMXTxbrYi2&dataStreamId=7",
      {
      })
      .then(function (response) {
        setph(response.data)
        console.log("my BOOK", response.data)
      })
      .catch(function (error) {
      });

    axios.get("https://blynk.cloud/external/api/get?token=mLnphrE2kXLQ1nS76icms2FMXTxbrYi2&dataStreamId=3",
      {
      })
      .then(function (response) {
        setwater(response.data)
        console.log("my BOOK", response.data)
      })
      .catch(function (error) {
      });

  }, []);


  return (
    <SafeAreaView>
      <View style={styles.containerr}>

        <Text style={styles.titlee}>Lettuce</Text>
        {/* <Image style={styles.cardImagee} source={{uri:"https://cdn-icons-png.flaticon.com/128/3823/3823349.png"}}/> */}
        <Image
          source={require('../assets/lettucee.png')}
          style={styles.cardImagee}
        />
      </View>
      <View style={[styles.container]}>
      
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
          <View style={styles.list}>


            <TouchableOpacity style={[styles.card, { backgroundColor: "#5BB2D3" }]} >
              <View style={styles.cardHeader}>
                <Text style={styles.title}>Nutrient Level</Text>
                <Text style={styles.title2}>{water} </Text>
                <Text style={{ color: 'white', top: 50, fontSize: 20, fontWeight: '500' }}>%</Text>



              </View>
              <Image style={styles.cardImage} source={{ uri: "https://cdn-icons-png.flaticon.com/128/5222/5222461.png" }} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.card, { backgroundColor: "#D85F5F" }]} >
              <View style={styles.cardHeader}>
                <Text style={styles.title}>Ph Reading</Text>
                <Text style={styles.title2}>{ph} </Text>
              </View>
              <Image style={styles.cardImage} source={{ uri: "https://cdn-icons-png.flaticon.com/128/4236/4236740.png" }} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card, { backgroundColor: "#B098DA" }]} >
              <View style={styles.cardHeader}>
                <Text style={styles.title}>Temperature & Humidity</Text>
                <Text style={styles.title2}>{humidity} </Text>
                {/* <Text style={styles.title2}> {tem}&deg;  </Text> */}



              </View>
              <Image style={styles.cardImage} source={{ uri: "https://cdn-icons-png.flaticon.com/512/5021/5021108.png" }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { navigation.navigate('MonitorP1') }}>
              <View style={styles.buttonStyle}><Text style={styles.text1}>Monitor Plants</Text></View>
            </TouchableOpacity>
         



            
          </View>
          {/* </ImageBackground> */}
      </View>

    </SafeAreaView>
    
  )
}

export default Plant1;

const styles = StyleSheet.create({
  containerr: {
    // flex: 1,
    marginTop: -50,
    height: 250,
    backgroundColor: '#1E8449'

  },
  buttonStyle: {
    height: 50,
    width: 200,
    backgroundColor: '#1E8449',
    bottom: -15,
    marginLeft: 15,
    borderRadius: 60,
  },
  text1: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 11,
  },
  container: {
    // flex: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    marginTop: -110,
    backgroundColor: 'white',
    height: 1000,

  },
  Plant1: {
    height: 170,
  },

  Plant2: {
    height: 150,
  },
  container1: {
    alignContent: 'center',
    margin: 60,
    bottom: 40,

  },
  button: {
    height: 160,
    width: 160,
    backgroundColor: '#f77493',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10


  },
  titlee: {
    textAlign: 'center',
    top: 75,
    left: -45,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  list: {
    flexDirection: 'column',
    alignItems: "center",
    // margin:10,
    // padding:10,
    marginTop: 60


  },
  listContainer: {
    alignItems: 'center'
  },
  /******** card **************/
  card: {
    marginHorizontal: 2,
    marginVertical: 8,
    // flexBasis: '28%',
    borderRadius: 11,
    width: 300,
    height: 150,
    // marginTop:100,




  },
  cardHeader: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 90,
    width: 90,
    alignSelf: 'flex-start',
    marginBottom: 20,
    margin: 10,
    top: -20
  },
  cardImagee: {
    height: 150,
    width: 60,
    marginTop: 40,
    margin: 25,
    top: -60,
  },
  title: {
    fontSize: 16,
    flex: 1,
    color: "#FFFFFF",
    fontWeight: 'bold'
  },
  title2: {
    fontSize: 50,
    // flex:1,
    color: "#FFFFFF",
    fontWeight: 'bold',
    top: 40,
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: "#FFFFFF",
  },
  icon: {
    height: 20,
    width: 20,
  }
})