import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Home';
import LoginScreen from './Login';

//Creating Stack Natigator for Navigation Screens
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      {/* Initial Screen */}
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}