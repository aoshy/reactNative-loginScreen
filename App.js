import React, {Component} from 'react';
import LoginView from './src/View/Login/LoginView';
import { ImageBackground } from 'react-native';
import styles from './src/Styles/styles';

const backgroundImage = require('./assets/imgs/background.jpg')

export default class App extends Component {
  
  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
      >
        <LoginView />
      </ImageBackground>
      
    );
  }
}