import React from 'react'
import { Actions } from 'react-native-router-flux';
import { StyleSheet, Text, View, Linking,WebView,Image,TouchableOpacity,Button, BackHandler} from 'react-native';


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

     const goToFTP1 = () => {
        Actions.ftp1()
     }

     const goToFTP2 = () => {
        Actions.ftp2()
     }

     const goToFTP3 = () => {
        Actions.ftp3()
     }

     const goToFTP4 = () => {
        Actions.ftp4()
     }

     const goToFTP5 = () => {
        Actions.ftp5()
     }

     const goToFTP6 = () => {
        Actions.ftp6()
     }

     const goToFTP7 = () => {
        Actions.ftp7()
     }

     const goToFTP8 = () => {
        Actions.ftp8()
     }

     const goToFTP9 = () => {
        Actions.ftp9()
     }

     const goToFTP10 = () => {
        Actions.ftp10()
     }

     const goToFTP11 = () => {
        Actions.ftp11()
     }

     const goToFTP12 = () => {
        Actions.ftp12()
     }

     const goToDownload1 = () => {
        Actions.download1()
     }

     const goToDownload2 = () => {
        Actions.download2()
     }

     const goToDownload3= () => {
        Actions.download3()
     }


     disableBackbutton=()=>{
             BackHandler.exitApp();
             return true;
     }
     
   return (
        <View style={styles.nav}>
            <Text style={{color:'grey',fontWeight:'bold',marginLeft:'3%',marginTop:'3%',fontSize:12,color:'red'}}>OUR FEATURES</Text>
            <View style={{borderColor:'grey',borderBottomWidth:0,marginBottom:20,marginTop:10}}>
            <View style={styles.row}>
        <View style={styles.back} >

     <TouchableOpacity
     style={{alignItems:'center'}}
     onPress = {goToPackage}
     >
             <Image
             
             style={{width:40,
             height:40,marginLeft:'5%',}}
             source={ require('./assets/package.png')
             }
/>
             <Text style={styles.backText}>PACKAGES</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
     onPress = {goToSignIn}
     >
             <Image
             style={{width:40,
                display:'flex',
             height:40,marginLeft:'0%',}}
source={ require('./assets/signin.png')}
/>
             <Text style={styles.backText}>SIGN IN</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
   onPress = {goToOffers}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'0%'}}
source={ require('./assets/offer.png')}
/>
             <Text style={styles.backText}>OFFERS</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
     onPress = {goToRefAndWin}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'0%'}}
source={ require('./assets/refer.png')}
/>
             <Text style={styles.backText}>REFER</Text>
     </TouchableOpacity>
</View>
</View>

{

///////////////////////////////////////////////////////////

}








<View style={styles.row}>
<View style={styles.back}>
     <TouchableOpacity
    onPress = {goToPayment}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'21%'}}
source={ require('./assets/payment.png')}
/>
             <Text style={styles.backText}>PAYMENT</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
      onPress = {goToContact}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'10%'}}
source={ require('./assets/contact.png')}
/>
             <Text style={styles.backText}>CONTACT</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
    onPress = {goToPayment}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'21%'}}
source={ require('./assets/help.png')}
/>
             <Text style={styles.backText}>HELP</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
   
</View>



</View>
</View>






















<View style={{borderColor:'black'}}>
<Text style={{color:'grey',fontWeight:'bold',marginLeft:'3%',marginTop:'0%',fontSize:12,marginBottom:'3%',color:'red'}}>DOWNLOAD</Text>
<View style={styles.row} >
<View style={styles.back}>
     <TouchableOpacity
    onPress = {goToDownload1}
    style={{alignItems:'center'}}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'10%',
             marginRight:'0%'
        }}
source={ require('./assets/popcorn.png')}
/>
             <Text style={styles.backText}> MOVIES</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
    onPress = {goToDownload2}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'0%'}}
source={ require('./assets/television.png')}
/>
             <Text  style={styles.backText}>TV SHOWS</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
    onPress = {goToDownload3}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'1%',}}
source={ require('./assets/download.png')}
/>
             <Text  style={styles.backText}>ALL</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
   
</View>

</View>

</View>





<View style={{borderColor:'grey',borderBottomWidth:0}}>

</View>















{

//////////////////////////////////////////**********************START

}








<Text style={{color:'grey',fontWeight:'bold',marginLeft:'3%',marginTop:'5%',fontSize:12,marginBottom:'1%',color:'red'}}>OUR FTP</Text>

<View style={styles.row}>
        <View style={styles.back} >

     <TouchableOpacity
     style={{alignItems:'center'}}
     onPress = {goToFTP1}
     >
             <Image
             
             style={{width:40,
             height:40,marginLeft:'5%',}}
             source={ require('./assets/samonline.png')     
             }
/>
             <Text style={styles.backText}>SAM ONLINE</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
     onPress = {goToFTP2}
     >
             <Image
             style={{width:40,
                display:'flex',
             height:40,marginLeft:'0%',}}
source={ require('./assets/midiplex.png')}
/>
             <Text style={styles.backText}>MIDIPLEX</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
   onPress = {goToFTP3}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'0%'}}
source={ require('./assets/timepass.png')}
/>
             <Text style={styles.backText}>TIMEPASS BD</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
     onPress = {goToFTP4}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'0%'}}
source={ require('./assets/moviehaat.png')}
/>
             <Text style={styles.backText}>MOVIE HAAT</Text>
     </TouchableOpacity>
</View>
</View>

<View style={styles.row}>
        <View style={styles.back} >

     <TouchableOpacity
     style={{alignItems:'center'}}
     onPress = {goToFTP5}
     >
             <Image
             
             style={{width:40,
             height:40,marginLeft:'5%',}}
             source={ require('./assets/natural.png')
             }
/>
             <Text style={styles.backText}>NATURAL BD</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
     onPress = {goToFTP6}
     >
             <Image
             style={{width:40,
                display:'flex',
             height:40,marginLeft:'0%',}}
source={ require('./assets/dhaka.png')}
/>
             <Text style={styles.backText}>DHAKA MOVIE</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
   onPress = {goToFTP7}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'0%'}}
source={ require('./assets/tejpata.png')}
/>
             <Text style={styles.backText}>TEJPATA</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
     onPress = {goToFTP8}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'0%'}}
source={ require('./assets/videomela.png')}
/>
             <Text style={styles.backText}>VIDEO MELA</Text>
     </TouchableOpacity>
</View>
</View>








{

////////////////////////////// LIVE TV

}



<Text style={{color:'grey',fontWeight:'bold',marginLeft:'3%',marginTop:'5%',fontSize:12,marginBottom:'1%',color:'red'}}>LIVE TV</Text>



<View style={styles.row}>
        <View style={styles.back} >

     <TouchableOpacity
     style={{alignItems:'center'}}
     onPress = {goToFTP9}
     >
             <Image
             
             style={{width:40,
             height:40,marginLeft:'5%',}}
             source={ require('./assets/gtv.png')
             }
/>
             <Text style={styles.backText}>GTV</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     
     style={{alignItems:'center'}}
     onPress = {goToFTP10}
     >
             <Image
             style={{width:40,
                display:'flex',
             height:40,marginLeft:'0%',}}
source={ require('./assets/IBOX.png')}
/>
             <Text style={styles.backText}>IBOX</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
   onPress = {goToFTP11}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'0%'}}
source={ require('./assets/amrbd.png')}
/>
             <Text style={styles.backText}>AMRBD</Text>
     </TouchableOpacity>
</View>
<View style={styles.back}>
     <TouchableOpacity
     style={{alignItems:'center'}}
     onPress = {goToFTP12}
     >
             <Image
             style={{width:40,
             height:40,marginLeft:'0%'}}
source={ require('./assets/jago.png')}
/>
             <Text style={styles.backText}>JAGOBD</Text>
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
        marginLeft:0,
        marginRight:5,
        backgroundColor:'black',
        
    },
    row:{
      
      flexDirection:'row',
      justifyContent:'space-evenly',
      marginTop:10,
    


    },
    back:{
        borderWidth: 3,borderColor:'black',flexDirection:'column',width:70,marginBottom:'3%'
    },
    backText:{
        color:'grey',fontWeight:'bold',textAlign:'center',fontSize:10
    },
    row2:{
        flexDirection:'row',
        marginTop:18,
        justifyContent:'space-evenly',
        
       
    },
    row3:{
      
        flexDirection:'row',
        justifyContent:'flex-start',
        marginTop:10,
  
      },
    
    
    });
export default Home