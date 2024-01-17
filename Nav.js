import React from 'react'
import { StyleSheet, Text, View, Linking,Image} from 'react-native';


function Nav() {
    return (
        <View style={styles.extra}>

            <View style={styles.extra2}>
            <Text style={{color:'white',fontSize:5,fontWeight:'bold'}}>   ━━━━</Text>
            <Text style={{color:'white',fontSize:5,fontWeight:'bold'}}>   ━━━━</Text>
            <Text style={{color:'white',fontSize:5,fontWeight:'bold'}}>   ━━━━</Text>
            </View>
          

          
        </View>
    )
}
const styles = StyleSheet.create({
    
    extra: {
        top:0,
        paddingTop:9,
        paddingBottom:9,
        zIndex:1,
        backgroundColor: 'black',
        display:'flex',
        
    },
    extra2: {
          maxHeight:20,
         marginLeft:15,
         borderColor:'grey',
         borderWidth:1,
         maxWidth:33,
         height:30,
         paddingTop:2,
         maxHeight:105,
         
    },
   
  

  });

export default Nav;
