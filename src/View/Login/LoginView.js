import { View, ImageBackground, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import TabViewLogin from '../../Components/Login/TabViewLogin';
import styles from '../../Styles/styles';

const backgroundImage = require('../../../assets/imgs/background.jpg')

export default class LoginView extends Component {
    render() {
      return (
          <ImageBackground
            source={backgroundImage}
            style={styles.backgroundImage}
          >
           <View style={styles.tabView}>
            <TabViewLogin />
           </View>
          </ImageBackground>
      );
    }

}
