import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Plant2 = ({navigation}) => {
  return (
    <SafeAreaView> 
    <View style={styles.containerr}>

    <Text style={styles.titlee}>Coriander</Text>
    <Image style={styles.cardImagee} source={{uri:"https://cdn-icons-png.flaticon.com/128/5346/5346192.png"}}/>

    </View>
       <View style={styles.container}>
      <View style={styles.list}>  
      

      <TouchableOpacity style={[styles.card, {backgroundColor:"#5BB2D3"}]} >
            <View style={styles.cardHeader}>
              <Text style={styles.title}>Nutrient Level</Text>
              {/* <Text style={styles.title2}>{pulse} </Text> */}
              <Text style={{color:'white',top:50,fontSize:20,fontWeight:'500'}}>%</Text>


              
            </View>
            <Image style={styles.cardImage} source={{uri:"https://cdn-icons-png.flaticon.com/128/5222/5222461.png"}}/>
          </TouchableOpacity>
        
          <TouchableOpacity style={[styles.card, {backgroundColor:"#D85F5F"}]} >
            <View style={styles.cardHeader}>
              <Text style={styles.title}>Ph Reading</Text>
 
            </View>
            <Image style={styles.cardImage} source={{uri:"https://cdn-icons-png.flaticon.com/128/4236/4236740.png"}}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, {backgroundColor:"#B098DA"}]} >
            <View style={styles.cardHeader}>
              <Text style={styles.title}>Temperature & Humidity</Text>
              {/* <Text style={styles.title2}>{pulse} </Text> */}
              {/* <Text style={styles.title2}> {tem}&deg;  </Text> */}


              
            </View>
            <Image style={styles.cardImage} source={{uri:"https://cdn-icons-png.flaticon.com/512/5021/5021108.png"}}/>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => { navigation.navigate('MonitorP2') }}>
       <View style={styles.buttonStyle}><Text style={styles.text1}>Monitor Plants</Text></View>
        </TouchableOpacity>

     

          </View>
      
    </View>
    
 </SafeAreaView>
  )
}

export default Plant2

const styles = StyleSheet.create({
  containerr: {
    // flex: 1,
    marginTop:-10,
    height:200,
    backgroundColor:'#73C6B6'
  
  },
  buttonStyle:{
    height: 50,
    width: 200,
    backgroundColor: '#73C6B6',
    bottom: -40,
    marginLeft:15,
    borderRadius: 60,
  },
  text1:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    top:11,
  },
  container: {
    // flex: 1,
    borderTopLeftRadius:60,
    borderTopRightRadius:60,
    marginTop:-100,
    backgroundColor:'white',
    height:1000,
  
  },
  button: {
    height:160,
    width:160,
    backgroundColor:'#f77493',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10
    
    
  },
 titlee:{
  textAlign:'center',
  top:50,
  left:-50,
  fontSize:20,
 },
  list: {
    flexDirection:'column',
    alignItems:"center",
    // margin:10,
    // padding:10,
    marginTop:60
    
  
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:8,
    // flexBasis: '28%',
    borderRadius:11,
    width:300,
    height:150,
    // marginTop:100,

    
   
    
  },
  cardHeader: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 90,
    width: 90,
    alignSelf:'flex-start',
    marginBottom:20,
    margin:10,
    top:-20
  },
  cardImagee:{
    height: 60,
    width: 60,
    marginTop:40,
    margin:25,
    top:-30
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  title2:{
    fontSize:50,
    // flex:1,
    color:"#FFFFFF",
    fontWeight:'bold',
    top:40,
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
})