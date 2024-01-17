import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home.js'
import About from './About.js'
import Offers from './Offers.js'
import { StyleSheet} from 'react-native';
import Container from './Container.js'
import Package from './Package.js';
import RefAndWin from './RefAndWin.js'
import Contact from './Contact.js'
import SignIn from './SignIn.js';
import Payment from './Payment.js';
import Multimedia from './Multimedia.js'
import FTP1 from './FTP1.js';
import FTP2 from './FTP2.js';
import FTP3 from './FTP3.js';
import FTP4 from './FTP4.js';
import FTP5 from './FTP5.js';
import FTP6 from './FTP6.js';
import FTP7 from './FTP7.js';
import FTP8 from './FTP8.js';
import FTP9 from './FTP9.js';
import FTP10 from './FTP10.js';
import FTP11 from './FTP11.js';
import FTP12 from './FTP12.js';

import Download1 from './Download1.js';
import Download2 from './Download2.js';
import Download3 from './Download3.js';

const Routes = () => (


   <Container>
         <Router sceneStyle={{backgroundColor:'black'}} >
      <Scene key = "root" sceneStyle={{backgroundColor:'white'}} hideNavBar={true}  >
         <Scene key = "home" component = {Home} title = "Home" initial = {true} navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red" } } />
         <Scene key = "offers" component = {Offers} title = "Offers" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />
          <Scene key = "package" component = {Package} title = "Packages" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />
       <Scene key = "refAndWin" component = {RefAndWin} title = "Ref" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />
       <Scene key = "contact" component = {Contact} title = "Ref" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />
        <Scene key = "signin" component = {SignIn} title = "Ref" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />
       <Scene key = "payment" component = {Payment} title = "Ref" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />
       <Scene key = "oldftp" component = {Multimedia} title = "Ref" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

      <Scene key = "ftp1" component = {FTP1} title = "FTP1" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

      <Scene key = "ftp2" component = {FTP2} title = "FTP2" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

<Scene key = "ftp3" component = {FTP3} title = "FTP1" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

      <Scene key = "ftp4" component = {FTP4} title = "FTP2" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

<Scene key = "ftp5" component = {FTP5} title = "FTP1" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

      <Scene key = "ftp6" component = {FTP6} title = "FTP2" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

<Scene key = "ftp7" component = {FTP7} title = "FTP1" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

      <Scene key = "ftp8" component = {FTP8} title = "FTP2" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

<Scene key = "ftp9" component = {FTP9} title = "FTP1" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

      <Scene key = "ftp10" component = {FTP10} title = "FTP2" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

<Scene key = "ftp11" component = {FTP11} title = "FTP1" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

      <Scene key = "ftp12" component = {FTP12} title = "FTP2" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

<Scene key = "download1" component = {Download1} title = "FTP2" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

<Scene key = "download2" component = {Download2} title = "FTP2" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />

<Scene key = "download3" component = {Download3} title = "FTP2" navigationBarStyle={{ backgroundColor: 'black',}} titleStyle={ { color: 
      "red",marginLeft:'40%' } } />
      </Scene>
      
   </Router>
   </Container>
   
)
export default Routes
const styles = StyleSheet.create({
   nav: {
      backgroundColor: 'black',
   },
  
   
   
   });