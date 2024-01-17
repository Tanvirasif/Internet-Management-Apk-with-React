  
  
/*export default class ActivityIndicatorDemo extends Component {  
    render() {  
        return (  
        <View style = {styles2.container}>  
            <WebView  
                source = {{ uri:'https://www.javatpoint.com' }}  
            />  
        </View>  
        )  
    }  
}  
const styles2 = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
}) */
/*
    <Image
        style={styles.tinyLogo}
        source={{
          uri: ' https://e0.365dm.com/20/09/2048x1152/skysports-lionel-messi-barcelona_5113303.jpg',
        }}
      />
<Button
      style={styles.box1}
      styleDisabled={{color: 'red'}}
      >
      Press Me!
    </Button>

    
    <Text style={{color: 'blue'}}
    onPress={() => Linking.openURL('http://google.com')}>
Google
</Text>*/

class MyInlineWeb extends Component {
    render() {
      return (
        <WebView
          originWhitelist={['*']}
          source={{ html: '<h1>Hello world</h1>' }}
        />
      );
    }
  }






  export default class Package extends React.Component {
    render() {
      return (
     
          <Container>
          {/* <Card>
            This is a small amount of text which will work perfectly fine given this screen size.
          </Card> */}
           <Card>
           
           </Card>
        </Container>
    
      
      );
    }
  }


  /*

  import { StatusBar } from 'expo-status-bar';
  import Container from './Container.js';
  import Card from './Card.js';
  import React, { Component } from 'react';
  import { StyleSheet, Text, View, Linking,WebView} from 'react-native';
  import Button from 'react-native-button';
  import Home from './Home.js';
  import image1 from './image1.js';
  import Multimedia from './Multimedia.js';
  import Package from './Package.js';
  import RefandWin from './RefAndWin.js';
  import Player from './Player.js';
  import 'react-native-gesture-handler';
  import { NavigationContainer } from '@react-navigation/native';



  */

 function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader/>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function CustomHeader(){
  return(
    <View style={{flexDirection:'row',height:50,borderWidth:50,borderStartColor:'red'}}>
    </View>
  );
}



const Tab = createBottomTabNavigator();




{
/*
import React from 'react'
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, Linking,WebView,Image,TouchableOpacity,Button, BackHandler} from 'react-native';
import Multimedia from './Multimedia';

const Home = () => {
   const goToOffers = () => {
      Actions.offers()
   }
   const goToPackage = () => {
    Actions.package()
 }
 const goToRefAndWin = () => {
    Actions.refAndWin()
 }
 const goToContact = () => {
        Actions.contact()
     }
     const goToSignIn = () => {
        Actions.signin()
     }
     const goToPayment = () => {
        Actions.payment()
     }
     const goToOldFtp = () => {
        Actions.oldftp()
     }
     disableBackbutton=()=>{
             BackHandler.exitApp();
             return true;
     }
     
   return (
    <View style={styles.nav}>
            <Text style={{color:'grey',fontWeight:'bold',marginLeft:'3%',marginTop:'3%',fontSize:20}}>Our Features</Text>
            <View style={{borderColor:'grey',borderBottomWidth:1,marginBottom:20,}}>
            <View style={styles.row}>
<View>

     <TouchableOpacity
     onPress = {goToPackage}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'0%'}}
             source={ require('./assets/package.png')}
/>
             <Text style={{color:'grey',fontWeight:'bold'}}>PACKAGES</Text>
     </TouchableOpacity>
</View>
<View >
     <TouchableOpacity
     onPress = {goToSignIn}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'8%',}}
source={ require('./assets/signin.png')}
/>
             <Text style={{color:'grey',fontWeight:'bold'}}>SIGN IN</Text>
     </TouchableOpacity>
</View>
<View >
     <TouchableOpacity
   onPress = {goToOffers}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'0%'}}
source={ require('./assets/offer.png')}
/>
             <Text style={{color:'grey',fontWeight:'bold',marginLeft:'0%'}}>OFFERS</Text>
     </TouchableOpacity>
</View>
<View >
     <TouchableOpacity
     onPress = {goToRefAndWin}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'0%'}}
source={ require('./assets/refer.png')}
/>
             <Text style={{color:'grey',fontWeight:'bold',marginLeft:'0%'}}>REFER</Text>
     </TouchableOpacity>
</View>
</View>










<View style={styles.row2}>
<View>
     <TouchableOpacity
    onPress = {goToPayment}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'14%'}}
source={ require('./assets/payment.png')}
/>
             <Text style={{color:'grey',fontWeight:'bold',marginLeft:'2%'}}>PAYMENT</Text>
     </TouchableOpacity>
</View>
<View >
     <TouchableOpacity
      onPress = {goToContact}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'10%'}}
source={ require('./assets/contact.png')}
/>
             <Text style={{color:'grey',fontWeight:'bold',marginLeft:'3%',marginBottom:'25%'}}>CONTACT</Text>
     </TouchableOpacity>
</View>
</View>
</View>






















<View style={{borderColor:'grey',borderBottomWidth:1}}>
<Text style={{color:'grey',fontWeight:'bold',marginLeft:'3%',marginTop:'0%',fontSize:20,marginBottom:'1%'}}>DOWNLAOD</Text>
<View style={styles.row} >
<View style={{marginBottom:15}}>
     <TouchableOpacity
    onPress = {goToOldFtp}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'30%',
             marginRight:'7%'
        }}
source={ require('./assets/popcorn.png')}
/>
             <Text style={{color:'grey',fontWeight:'bold',marginLeft:'24%',}}> MOVIES</Text>
     </TouchableOpacity>
</View>
<View style={{marginBottom:15}}>
     <TouchableOpacity
    onPress = {goToOldFtp}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'12%'}}
source={ require('./assets/television.png')}
/>
             <Text style={{color:'grey',fontWeight:'bold',marginLeft:'1%',marginRight:'10%'}}>TV SHOWS</Text>
     </TouchableOpacity>
</View>
<View style={{marginBottom:15}}>
     <TouchableOpacity
    onPress = {goToOldFtp}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'28%',}}
source={ require('./assets/football.png')}
/>
             <Text style={{color:'grey',fontWeight:'bold',marginLeft:'20%'}}>Others</Text>
     </TouchableOpacity>
</View>

</View>

</View>





<View style={{borderColor:'grey',borderBottomWidth:1}}>

</View>



<Text style={{color:'grey',fontWeight:'bold',marginLeft:'3%',marginTop:'5%',fontSize:20,marginBottom:'1%'}}>OUR FTP</Text>

<View style={styles.row}>
<View>

     <TouchableOpacity
     onPress = {goToPackage}
     
     >
             
             <Text style={{color:'black',fontWeight:'bold',padding:20,backgroundColor:'grey'}}>FTP1</Text>
             <Text style={{color:'grey',fontWeight:'bold',backgroundColor:'black',textAlign:'center'}}>NAME</Text>
     </TouchableOpacity>
</View>
<View>

     <TouchableOpacity
     onPress = {goToPackage}
     
     >
             
             <Text style={{color:'black',fontWeight:'bold',padding:20,backgroundColor:'grey'}}>FTP2</Text>
             <Text style={{color:'grey',fontWeight:'bold',backgroundColor:'black',textAlign:'center'}}>NAME</Text>
     </TouchableOpacity>
</View>
<View>

     <TouchableOpacity
     onPress = {goToPackage}
     
     >
             
             <Text style={{color:'black',fontWeight:'bold',padding:20,backgroundColor:'grey'}}>FTP3</Text>
             <Text style={{color:'grey',fontWeight:'bold',backgroundColor:'black',textAlign:'center'}}>NAME</Text>
     </TouchableOpacity>
</View>
<View>

     <TouchableOpacity
     onPress = {goToPackage}
     
     >
             
             <Text style={{color:'black',fontWeight:'bold',padding:20,backgroundColor:'grey'}}>FTP4</Text>
             <Text style={{color:'grey',fontWeight:'bold',backgroundColor:'black',textAlign:'center'}}>NAME</Text>
     </TouchableOpacity>
</View>
</View>

<View style={styles.row2}>
<View>

     <TouchableOpacity
     onPress = {goToPackage}
     
     >
             
             <Text style={{color:'black',fontWeight:'bold',padding:20,backgroundColor:'grey'}}>FTP1</Text>
             <Text style={{color:'grey',fontWeight:'bold',backgroundColor:'black',textAlign:'center'}}>NAME</Text>
     </TouchableOpacity>
</View>
<View style={{marginLeft:27}}>

     <TouchableOpacity
     onPress = {goToPackage}
     
     >
             
             <Text style={{color:'black',fontWeight:'bold',padding:20,backgroundColor:'grey'}}>FTP2</Text>
             <Text style={{color:'grey',fontWeight:'bold',backgroundColor:'black',textAlign:'center'}}>NAME</Text>
     </TouchableOpacity>
</View>

</View>







{

////////////////////////////// LIVE TV

}



<Text style={{color:'grey',fontWeight:'bold',marginLeft:'3%',marginTop:'5%',fontSize:20,marginBottom:'1%'}}>LIVE TV</Text>

<View style={styles.row}>
<View>

     <TouchableOpacity
     onPress = {goToPackage}
     
     >
             
             <Text style={{color:'black',fontWeight:'bold',padding:20,backgroundColor:'grey'}}>FTP1</Text>
             <Text style={{color:'grey',fontWeight:'bold',backgroundColor:'black',textAlign:'center'}}>NAME</Text>
     </TouchableOpacity>
</View>
<View>

     <TouchableOpacity
     onPress = {goToPackage}
     
     >
             
             <Text style={{color:'black',fontWeight:'bold',padding:20,backgroundColor:'grey'}}>FTP2</Text>
             <Text style={{color:'grey',fontWeight:'bold',backgroundColor:'black',textAlign:'center'}}>NAME</Text>
     </TouchableOpacity>
</View>
<View>

     <TouchableOpacity
     onPress = {goToPackage}
     
     >
             
             <Text style={{color:'black',fontWeight:'bold',padding:20,backgroundColor:'grey'}}>FTP3</Text>
             <Text style={{color:'grey',fontWeight:'bold',backgroundColor:'black',textAlign:'center'}}>NAME</Text>
     </TouchableOpacity>
</View>
<View>

     <TouchableOpacity
     onPress = {goToPackage}
     
     >
             
             <Text style={{color:'black',fontWeight:'bold',padding:20,backgroundColor:'grey'}}>FTP4</Text>
             <Text style={{color:'grey',fontWeight:'bold',backgroundColor:'black',textAlign:'center'}}>NAME</Text>
     </TouchableOpacity>
</View>
</View>



















</View>
 )
}
const styles = StyleSheet.create({
    nav: {
        marginTop:0,
        color:'red',
        fontWeight:'bold',
        marginLeft:5,
        marginRight:5,
        backgroundColor:'black',
        
    },
    row:{
      
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginTop:10,

    },
    row2:{
        flexDirection:'row',
        marginTop:18,
        justifyContent:"flex-start",
        marginLeft:20
    }
    
    
    });
export default Home

*/


}