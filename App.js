/**
 * The app uses navigation to allow the user to go to different screens while maintaining memory of
 * where it was last allowing the user to go back to their previous screen.
 * The app uses a custom made background and logo design for both the welcome and home screen
 */

//--------------------------------------------------------------------------------------------------------
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Screens/HomeScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import TrendingBooks from './TrendingBooks';
import Footer from './Footer';
import TrendingComponent from './TBooksContainer';

import { navigationRef } from './RootNavigation';
import Classics from './Classics';
const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Welcome to Livro"
      >
        <Stack.Screen
          name="Welcome to Livro"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Trending"
          component={TrendingBooks}
        />
        <Stack.Screen
          name="Classics"
          component={Classics}
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vsop: {
    color: '#f5e'
  }
});
