import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Package from './Package.js'

const Payment = () => {
   const goToHome = () => {
      Actions.home()
   }
   return (

      <View>
 <Text style={{color:'red'}}>   BKASH    --   01615115599 </Text>
 <Text style={{color:'red'}}>   ROCKET  --   01615115599 </Text>
 <Text style={{color:'red'}}>   NAGAD    --   01615115599 </Text>

      </View>
     
   )
}
export default Payment