import {TouchableOpacity,Image, StyleSheet,Switch, Text, View } from 'react-native'
import React, {useState} from 'react'

const MonitorP2 = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
     <Image
      source={require('../assets/coriander.png')}
      style={styles.Iimage}
    />
    <Text style={styles.head}>Coriander</Text>
    <TouchableOpacity style={[styles.card1, {backgroundColor:"#C39BD3"}]} >
            <View style={styles.cardHeader}>
              <Text style={styles.title}>Water Motor</Text>
              <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />      
            </View>
            <Image style={styles.cardImage} source={{uri:"https://cdn-icons-png.flaticon.com/128/9047/9047183.png"}}/>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card2, {backgroundColor:"#5499C7"}]} >
            <View style={styles.cardHeader}>
              <Text style={styles.title}>Light</Text>
              <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />      
            </View>
            <Image style={styles.cardImage} source={{uri:"https://cdn-icons-png.flaticon.com/128/702/702797.png"}}/>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card3, {backgroundColor:"#F1948A"}]} >
            <View style={styles.cardHeader}>
              <Text style={styles.title}>Fan</Text>
              <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />      
            </View>
            <Image style={styles.cardImage} source={{uri:"https://cdn-icons-png.flaticon.com/128/556/556878.png"}}/>
          </TouchableOpacity>
      
    </View>
  )
}

export default MonitorP2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D4EFDF',
      },
      head:{
        bottom:50,
        fontWeight:'bold',
        left:50,
        fontSize:40,
      },
      containerr: {
        // flex: 1,
        marginTop:-10,
        height:200,
        backgroundColor:'#73C6B6'
      
      },
      Iimage:{
        height:200,
        width:180,
        bottom:-60,
        right:130,
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
    //   container: {
    //     // flex: 1,
    //     borderTopLeftRadius:60,
    //     borderTopRightRadius:60,
    //     marginTop:-100,
    //     backgroundColor:'white',
    //     height:1000,
      
    //   },
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
      card1:{
        marginHorizontal:2,
        marginVertical:8,
        // flexBasis: '28%',
        borderRadius:11,
        width:300,
        height:150,
        // marginTop:100,
        marginBottom:150,
      },
      card2:{
        // flexBasis: '28%',
        borderRadius:11,
        width:300,
        height:150,
        // marginTop:100,
        marginBottom:50,
        top:-100,  
      },
      card3:{
        // flexBasis: '28%',
        borderRadius:11,
        width:300,
        height:150,
        // marginTop:100,
        marginBottom:50,
        top:-100,  
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
        top:-40
      },
      cardImagee:{
        height: 60,
        width: 60,
        marginTop:40,
        margin:25,
        top:-30
      },
      title:{
        fontSize:20,
        flex:1,
        color:"#FFFFFF",
        fontWeight:'bold',
        bottom:15,
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