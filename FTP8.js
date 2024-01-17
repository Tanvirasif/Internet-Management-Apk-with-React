import React,{ Component } from 'react';
import { useState, useEffect } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, Linking,BackHandler,Alert} from 'react-native';
import Button from 'react-native-button';
import { Reducer } from 'react-native-router-flux';

import { WebView } from 'react-native-webview';
export default class FTP8 extends React.Component {

    render() {


      return <WebView style={styles.container}
      
      source={{ uri: 'http://vdomela.com/' }} />;
    }
  }
  const styles = StyleSheet.create({
     container: {
     flex: 1,
     marginTop:0,
    },
  
  });