import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VideoDetailsScreen from './screens/VideoDetailsScreen';
const Stack = createStackNavigator()

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name='VideoDetails' component={VideoDetailsScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
