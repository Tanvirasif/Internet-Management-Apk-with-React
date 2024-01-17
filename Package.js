import React from 'react';
import { StyleSheet,Image, Text, View, Linking} from 'react-native';
import Button from 'react-native-button';
import { Reducer } from 'react-native-router-flux';
import Container from './Container.js'
import Offers from './Offers.js';
import Multimedia from './Multimedia.js';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default class Package extends React.Component {
    render() {
      return (
     
          <Container>
                   <View >

              
<View style={styles.extra}>



</View>
<View style={styles.containerX}

>
<Image
style={{width:'42%',
height:250,
marginLeft:'5%',
marginTop:19,
}}
source={ require('./assets/1414a256-5145-4d21-abad-daafa9ec07cb.jpg')}


/>
<Image
style={{width:'42%',
height:250,
marginLeft:26,
marginRight:26,
marginTop:19,
}}
source={ require('./assets/taka600.jpg')}


/>
</View>
<View style={styles.containerX}>
<Image
style={{width:'42%',
height:250,
marginLeft:'5%',
marginBottom:0,
}}
source={ require('./assets/taka700.jpg')}


/>
<Image
style={{width:'42%',
height:250,
marginLeft:26,
marginRight:26,
marginBottom:0,
}}
source={ require('./assets/taka800.jpg')}


/>
</View>

<View style={styles.containerX}>
<Image
style={{width:'42%',
height:250,
marginLeft:'5%',


}}
source={ require('./assets/taka1000.jpg')}


/>
<Image
style={{width:'42%',
height:250,
marginLeft:26,
marginRight:26,
}}
source={ require('./assets/taka1500.jpg')}


/>
</View>
<View style={styles.containerX}


>
<Image
style={{width:'42%',
height:250,
marginLeft:'5%',
marginBottom:0,
}}
source={ require('./assets/taka2000.jpg')}


/>
<Image
style={{width:'42%',
height:250,
marginLeft:26,
marginRight:26,
marginBottom:0,
}}
source={ require('./assets/taka2400.jpg')}


/>
</View>


</View>
        </Container>
    
      
      );
    }
  }


const styles = StyleSheet.create({
        containerX: {
        flexDirection: 'row',
        backgroundColor: 'grey',
        paddingBottom: 20,
        display: 'flex',
        
      },
      extra: {
        top:0,
        flexDirection:'row',
        paddingTop:0,
        paddingBottom:9,
        zIndex:1,
        backgroundColor: 'grey',
        display:'flex',
        
    },
  

  });


