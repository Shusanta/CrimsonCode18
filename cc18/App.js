import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View,TextInput, ImageBackground, WebView} from 'react-native';
import  * as firebase from 'firebase';
import { Input } from './Components/input';
import { Button } from './Components/Button';
import { Font } from 'expo';
export default class App extends React.Component {
  state = {
    Email: '',
    Password: '',
    auth:  0,

  }
  
  componentDidMount() {
    Font.loadAsync({
      'montserrat': require('./assets/fonts/Montserrat-Medium.ttf'),
    });
  }
  
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyC_zSy23Bg7GWsXcqrg4xYxuwez7bU5pIY',
      authDomain: 'crimsonreact-978b8.firebaseapp.com',
    }


    firebase.initializeApp(firebaseConfig);
  }

  onPressSignIn () {
    this.setState({
      auth : this.state.auth+1
    });
  }
  
  renderCurrentState4() {
    return (
      
        <WebView
        source={{uri: "https://demo.docusign.net/Signing/StartInSession.aspx?t=32b1ed0b-922a-44d2-a1ef-4d8c4c5d5917"}}
        style={{marginTop: 20}}
      />
      
    );
  }

  renderCurrentState3() {
    
      return (
        <ImageBackground 
        source = {require('./assets/splash3.png')}
        style = {{width: '100%',height:"100%" }}>
        <View style = {{marginTop:"135%"}}>
        <Button 
          
        onPress = { ()=> this.onPressSignIn()}> LOGIN
      </Button>

        </View>
        </ImageBackground>
      );

    }

  renderCurrentState2() {
    
      return (
        <ImageBackground 
        source = {require('./assets/splash.png')}
        style = {{width: '100%',height:"100%" }}>
        <View style = {styles.ultra}>
        <Button 
          style = {{marginTop:"20%",}}
        onPress = { ()=> this.onPressSignIn()}> LOGIN
      </Button>

        </View>
        </ImageBackground>
      );

    }

    renderCurrentState(){
        
      return (
        <ImageBackground 
        source = {require('./assets/splash2.jpg')}
        style = {{width: '100%',height:"100%" }}>
        <View style ={styles.form}>
      
      <Button 
        onPress = { ()=> this.onPressSignIn()}> LOGIN
      </Button>
      </View>
      </ImageBackground>
      );
        
    }

    render() {
      if (this.state.auth === 0)
        return (this.renderCurrentState());
      else if (this.state.auth === 1)
        return (this.renderCurrentState2());
      else if (this.state.auth === 2 )
        return (this.renderCurrentState3());
        else if (this.state.auth === 3 )
        return (this.renderCurrentState4());
    }
      
  }



const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    // flex: 1,
    // padding: 0,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column'

  },
  form: {
    // flex: 1
    marginTop: "95%"
  },
  ultra: {
    marginTop: "10%"
    
  }
});