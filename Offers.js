import React from 'react';
import { StyleSheet,Image, Text, View, Linking} from 'react-native';
import Button from 'react-native-button';
import { Reducer } from 'react-native-router-flux';
import Container from './Container.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CenterFocusStrong, CenterFocusWeak } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';
import { Actions } from 'react-native-router-flux'







const Offers = () => {
  const goToSignIn = () => {
     Actions.signin()
  }
  return (
    <Container >
                
    <View style={styles.extra}>
   
    <Text style={{color:'black',fontSize:13,fontWeight:'bold',borderColor:'transparent',borderWidth:0,backgroundColor:'white',padding:20,marginTop:20,paddingLeft:'9%'}}>   
     NEW USERS : 20% DISCOUNT TILL JANUARY 2021  
     </Text>
     <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>1. Install this app on your phone.</Text>
     <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>2. Sign in with your Username and Password provided by ISP.</Text>
     <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>3. Claim and Keep your code</Text>
     <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}></Text>
     <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25,paddingBottom:20}}>Note: If you dont know your Username and Password, Contact ISP(Call:01615115599).  </Text>

     
     
    
    <Text style={{color:'black',fontSize:12,fontWeight:'bold',borderColor:'transparent',borderWidth:0,backgroundColor:'white',padding:20,marginTop:20,paddingLeft:'8%' }}>    OLD USERS  : 10% DISCOUNT TILL JANUARY 2021  </Text>
    
     <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>1. Install this app on your phone.</Text>
     <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>2. Sign in with your Username and Password provided by ISP.</Text>
     <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}>3. Claim and Keep your code</Text>
     <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25}}></Text>
     <Text style={{color:'grey',fontWeight:'bold',fontSize:11,backgroundColor:'white',paddingLeft:25,paddingBottom:20}}>Note: If you dont know your Username and Password, Contact ISP(Call:01615115599).  </Text>
      
     <Button
style={{color:'red',marginLeft:'31%',maxWidth: '40%',borderWidth:2,borderRadius: 10 , backgroundColor:'black', fontWeight:'bold',fontSize:17,marginTop:'10%',padding:'1%'}}

styleDisabled={{color: 'red'}}
onPress = {goToSignIn}
>

CLAIM CODE
</Button>

    </View>
     
     
    
   

</Container>
  )
}
export default Offers
























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


