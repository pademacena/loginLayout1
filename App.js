/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//Modelo Base de Pagina

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import bgImage from './img/background.png'
import logoImage from './img/logo.png'

const { width: WIDTH } = Dimensions.get('window')

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logoImage} style={styles.logo} />
          <Text style={styles.logoTexto}>REACT-NATIVE</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            placeholder={'Username'} 
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            placeholder={'Password'} 
            secureTextEntry={true}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid='transparent'
          />
        </View>        
        <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logoTexto: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputContainer: {
    marginTop: 10,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'center',
    marginTop: 30,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },

});
