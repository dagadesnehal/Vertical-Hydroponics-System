import React from "react";
import {TouchableOpacity, ImageBackground,Text ,View, StyleSheet } from 'react-native';
import {Card, Button , Title ,Paragraph, shadow } from 'react-native-paper';

const image = {uri: 'https://i.pinimg.com/originals/44/d6/e1/44d6e12ef1bd0d09fe16942701214c29.jpg'};
const Plant1 = ({navigation}) => {
	
	return(
		<View
        style={[{
          flex:1,
          flexDirection: 'column',
          // flexWrap: 'wrap',
          justifyContent:'center',
          alignItems:'stretch',
          
        }]}
      >
      
      <View style={Styles.container3}></View>
      <View style={[Styles.containerr]}>
      
      
      <ImageBackground source={image} resizeMode="cover" style={Styles.image}>
		<Card style={Styles.container}>
		<Card.Content>
			<Title>Lettuce</Title>
		</Card.Content>
		<Card.Cover style={Styles.Plant1} source={{ uri:'https://cdn.britannica.com/77/170677-050-F7333D51/lettuce.jpg'}} />
	<Card.Content>
		<Paragraph>Grow crisp and green lettuce for your salads and tasty burgers!</Paragraph>
		</Card.Content>
		<Card.Actions>
		 <TouchableOpacity onPress={() => { navigation.navigate('Plant1') }}>
       {/* <View style={Styles.buttonStyle}><Text style={Styles.text1}>Manage your Plant</Text></View> */}
        </TouchableOpacity>
		</Card.Actions>
	</Card>
  <Card style={Styles.container1}>
		<Card.Content>
			<Title>Coriander</Title>
		</Card.Content>
		<Card.Cover style={Styles.Plant2} source={{ uri:'https://healthybuddha.in/image/cache/catalog/Coriander-500x515.jpg'}} />
	<Card.Content>
  <Paragraph>Grow aromatic and fresh coriander to add flavor to your dish!</Paragraph>
		</Card.Content>
		<Card.Actions>
		<TouchableOpacity onPress={() => { navigation.navigate('Plant2') }}>
       {/* <View style={Styles.buttonStyle}><Text style={Styles.text1}>Manage your Plant</Text></View> */}
        </TouchableOpacity>
		</Card.Actions>
    
	</Card>
  
  
  </ImageBackground>
  <Text style={Styles.text1}>Know Your Plants !!!</Text>
  </View>
  </View>
	)

  
}
export default Plant1;

const Styles = StyleSheet.create({
	container :{
		alignContent:'center',
		margin:60,
    bottom:-10,
	},
  containerr: {
    // flex: 1,
    // marginTop:-40,
    height:750,
    
    top:-55,
    borderTopLeftRadius:60,
    borderTopRightRadius:60,
    backgroundColor:'white',
  },
  container3: {
    // flex: 1,
    // marginTop:-40,
    //bottom:0,
    height:400,

    // borderTopLeftRadius:60,
    // borderTopRightRadius:60,
    backgroundColor:'#1E8449',
  },
  Plant1:{
    height:170,
  },

  Plant2:{
    height:150,
  },

  text1:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    // marginLeft:-3,
    bottom:800,
    fontSize:22,
    fontFamily:'monospace',
  },
  title:{
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    // marginLeft:-3,
    bottom:20,
    fontSize:20,
  },
  buttonStyle:{
    height: 40,
    width: 200,
    backgroundColor: 'transparent',
    bottom: 5,
    borderColor: '#2B056B',
    borderWidth: 1,
    marginLeft:15,
    borderRadius: 60,
  },
  container1 :{
		alignContent:'center',
		margin:60,
    bottom:85,
    
	},
  image: {
    flex: 1,
    justifyContent: 'center',
    // height:'150%',
    // width:'100%',
    borderTopRightRadius:50,
    borderTopLeftRadius:50,
    overflow:"hidden",
    // resizeMode:'cover',
    top:-40,
  },
})
