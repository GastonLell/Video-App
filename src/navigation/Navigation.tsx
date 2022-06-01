import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='DetailScreen' component={DetailScreen}/>
    </Stack.Navigator>
  )
}

export default Navigation;