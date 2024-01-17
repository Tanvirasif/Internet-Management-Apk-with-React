import React from 'react'
import { StyleSheet,Image, Text, View, Linking,Dimensions} from 'react-native';
import Button from 'react-native-button';
import Container from './Container.js';
import Card from './Card.js';
import  { useState, useEffect } from "react";
import { Reducer } from 'react-native-router-flux';


export default class RefandWin extends React.Component {
  render() {


    return (
   
        <Container >
              
            <View style={styles.extra}>
           
            <Text style={{color:'black',fontSize:13,fontWeight:'bold',borderColor:'transparent',borderWidth:0,backgroundColor:'white',padding:20,marginTop:20,paddingLeft:'8%'}}>   
            GET 10% DISCOUNT FOR EVERY USER YOU REFER🔥
             </Text>
             <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>If you refer 1 user you will get 10%</Text>
             <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>If you refer 2 user you will get 20%</Text>
             <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>If you refer 3 user you will get 30%</Text>
             <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>If you refer 4 user you will get 40%</Text>
             <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>If you refer 5 user you will get 50%</Text>
             <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>If you refer 6 user you will get 60%</Text>
             <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>If you refer 7 user you will get 70%</Text>
             <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>If you refer 8 user you will get 80%</Text>
             <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>If you refer 9 user you will get 90%</Text>
             <Text style={{color:'black',fontWeight:'bold',fontSize:12,backgroundColor:'white',paddingLeft:25,paddingBottom:20}}>If you refer 10 user you will get 100%   (FREE INTERNET🔥)</Text>
             <Text style={{color:'black',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>How to refer?</Text>
             <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25,paddingBottom:15}}>Your friend will have to mention your username while taking connection,and you will get the discount.</Text>
             <Text style={{color:'black',fontSize:13,fontWeight:'bold',backgroundColor:'white',padding:20,marginTop:20,paddingLeft:'14%'}}>   
            GET 100% DISCOUNT FOR LANDOWNERS🔥
             </Text>
             <Text style={{color:'black',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25,paddingBottom:5}}>RULE:</Text>
       
             <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25,paddingBottom:0}}>- You have to let us set cable box in your building</Text>
             <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25,paddingBottom:28}}>- No other service providers can provide connection in your building</Text>
             
 

            </View>
             
             
            
           

      </Container>
  
    
    );
  }
  }

  const styles = StyleSheet.create({
    containerX: {
    flexDirection: 'column',
    backgroundColor: 'grey',
    paddingBottom: 20,
    display: 'flex',
    
  },
  extra: {
    
    flexDirection:'column',
    paddingTop:0,
    paddingBottom:740,
  
    backgroundColor: 'grey',
    display:'flex',
    
},


});
