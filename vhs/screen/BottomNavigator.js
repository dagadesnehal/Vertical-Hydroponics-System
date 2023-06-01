import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import Plant1 from './Plant1';
import Home from './Home';
import Plant from './Plant';
import Plant2 from './Plant2';

export default function BottomNavigator({ navigation }) {
  return (
    <Tab.Navigator style={styles.container}>
      <Tab.Screen name="Home" component={Plant} 
      options={{
        headerShown: false,
        tabBarIcon: ({color,size}) => (
            <Icon name="home" size={30} color={color} />
        )
        }} 
        />
      <Tab.Screen name="Lettuce" component={Plant1} options={{
        headerShown: false,
        tabBarIcon: ({color,size}) => (
            <Icon name="leaf" size={30} color={color} />
        )
        }}/>
          <Tab.Screen name="Corriander" component={Plant2} options={{
        headerShown: false,
        tabBarIcon: ({color,size}) => (
            <Icon name="tree" size={30} color={color} />
        )
        }}/>
          <Tab.Screen name="Notification" component={Plant} options={{
        headerShown: false,
        tabBarIcon: ({color,size}) => (
            <Icon name="bell" size={30} color={color} />
        )
        }}/>
    </Tab.Navigator> 
  )
}

const styles = StyleSheet.create({})