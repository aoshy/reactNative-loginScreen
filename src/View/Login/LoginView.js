import { View } from 'react-native';
import React, { Component } from 'react';
import TabViewLogin from '../../Components/Login/TabViewLogin';

export default class LoginView extends Component {
    render() {
      return (
        <View style={styles.tabView}>
          <TabViewLogin />
        </View>
      );
    }

}
