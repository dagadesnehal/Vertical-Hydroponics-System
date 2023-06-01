// import { StyleSheet, Text, View ,Image,ActivityIndicator} from 'react-native'
// import React from 'react'

// export default function Home() {
//   return (
    
//     <View>
//       <Text>Home</Text>
    

//     <View style={{  backgroundColor:'#F3F8FF',borderBottomEndRadius:50}} > 

//       <View style={{ margin:10}} > 
//       <Text style={{fontSize:30,fontWeight:'800',color:'black'}} > Welcome </Text>
//       <Text style={{fontSize:25,fontWeight:'600',color:'#ed751f'}} > to SmartCity </Text>
      
//       <View style={styles.container}>
//     <Image
//       source={require('../assets/bg.jpg')}
//       style={{width: '30%', resizeMode: 'contain', margin: 10}}
//     />
    
//   </View>
//       </View>
//       </View>
//       </View>
//   )
// }

// const styles = StyleSheet.create({})


import React from 'react';
import {ImageBackground, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';

const image = {uri: 'https://e1.pxfuel.com/desktop-wallpaper/797/377/desktop-wallpaper-premium-of-calathea-orbifolia-by-a-white-wall-by-jira-about-calathea-orbifolia-shadow-window-table-plant-shadow-wall-and-window-shadow-%E2%80%A6-white-and-green-aesthetic-thumbnail.jpg'};

const Home = ({navigation}) => (
  <View style={styles.container}>

    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    
      {/* <Image style={styles.cardImage} source={{uri:"https://www.techaheadcorp.com/wp-content/uploads/2020/06/smart-city-solutions.png"}}/> */}
      <Image
      source={require('../assets/logo.png')}
      style={styles.cardImage}
    />
      <Text style={styles.text} options={{headerShown: false}}>Vertical</Text>
      <Text style={styles.text}>Hydroponics System</Text>
      <Text style={styles.text2}>With hydroponics, go soiless and enjoy gardening! Anyone can be a successful hydroponic gardener with this...</Text>
      
      <TouchableOpacity onPress={() => { navigation.navigate('Bottomnavigator') }}>
       <View style={styles.buttonStyle}><Text style={styles.text1}>Get Started</Text></View>
        </TouchableOpacity>
     </ImageBackground>
     
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text1:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'monospace',
    top:10,
  },
  text2:{
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'monospace',
    top:-250,
  },
  text: {
    color: 'green',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft:20,
    top: -270,
    opacity: 1.5,
    fontFamily: 'normal',
    fontWeight:'bold',
  },
  cardImage:{
    bottom: -60,
    height:100,
    width:100,
    top: -218,
    marginLeft: 50,
  },
  buttonStyle:{
    height: 50,
    width: 200,
    backgroundColor: '#175D17',
    bottom: -160,
    marginLeft:15,
    borderRadius: 60,
  },
});

export default Home;
