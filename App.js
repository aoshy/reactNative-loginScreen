import React, {Component} from 'react';
import LoginView from './src/View/Login/LoginView';
import { ImageBackground } from 'react-native';
import styles from './src/Styles/styles';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/Reducers';

const backgroundImage = require('./assets/imgs/background.jpg')

export default class App extends Component {
  
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        >
          <LoginView />
        </ImageBackground>
      </Provider>
      
    );
  }
}