  
  import React, { Component } from 'react';
  import { AppRegistry, View } from 'react-native';
  import Routes from './Routes.js'
  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
  import { NavigationContainer ,DefaultTheme, DarkTheme} from '@react-navigation/native';
  import Multimedia from './Multimedia.js';
  import Container from './Container.js';


  const Tab = createMaterialTopTabNavigator();


    const MyTheme = {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        primary: 'grey',
        text: 'red',
        backgroundColor: 'white',
      },
    };
  class reactTutorialApp extends Component {
     render() {
        return (
          <NavigationContainer  theme={MyTheme} >
    
          <Container >
          <Tab.Navigator style={{marginTop:0,paddingTop:0,backgroundColor:'white',}}>
               <Tab.Screen name="SOIMON ONLINE" component={Routes} />
              
               </Tab.Navigator>
          </Container>
    
    
               
        </NavigationContainer>
        )
     }
  }
  export default reactTutorialApp
  AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)
  
  
  
  
  
  
  
  
  
  /*import * as React from 'react';
  import { StyleSheet, Text, View, Linking,WebView, AppRegistry} from 'react-native';
  import Button from 'react-native-button';
  import Home2 from './Home2.js';
  import image1 from './image1.js';
  import Multimedia from './Multimedia.js';
  import Package from './Package.js';
  import RefandWin from './RefAndWin.js';
  import Player from './Player.js';
  import { NavigationContainer ,DefaultTheme, DarkTheme} from '@react-navigation/native';
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  import { StatusBar } from 'expo-status-bar';
  import Container from './Container.js';
  import Card from './Card.js';
  import { Component } from 'react';
  import Offers from './Offers.js';
  import Routes from './Routes.js';
  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

  class App extends Component {
    render() {
       return (
          <Routes />
       )
    }
 }
 export default App
 AppRegistry.registerComponent('App', () => App)
  /*{

    const Tab = createMaterialTopTabNavigator();

    const MyTheme = {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        primary: 'grey',
        text: 'red',
        backgroundColor: 'white',
      },
    };
    export default function App() {
      return (
    
    
    
        <NavigationContainer theme={MyTheme} >
    
          <Container>
          <Tab.Navigator style={{marginTop:0,paddingTop:0,backgroundColor:'black'}}>
               <Tab.Screen name="Routes" component={Routes} />
               <Tab.Screen name="Media" component={Multimedia} />
               </Tab.Navigator>
          </Container>
    
    
               
        </NavigationContainer>
      );
    }
    const styles = StyleSheet.create({
    nav: {
        marginTop:20,
        backgroundColor:'black',
    },
    
    
    });


  }*/


