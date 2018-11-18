import * as React from 'react';
import { Text } from 'react-native';
import { View, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import SignIn from './SignIn';
import SignUp from './SignUp';
import styles from '../../Styles/styles';

const FirstRoute = () => (
    <View style={{ height: '70%' }}>
        <SignIn />
    </View>
);
const SecondRoute = () => (
  <SignUp />
);

export default class TabViewLogin extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'SIGN IN', index: 0 },
      { key: 'second', title: 'SIGN UP', index: 1 },
    ],
  };

  renderLabel = ({ route }) => {
    if (route.index === this.state.index) {
           return (
            <View style={styles.topPadding20} >
                <Text style={[ styles.whiteTextRoboto , { fontSize: 18 }]}>{route.title}</Text>
                <View style={{ backgroundColor: 'rgb(196,110,111)', height: 2 }} />
            </View>)
    }
    return (
        <View style={styles.topPadding20 } >
            <Text style={[ styles.whiteTextRoboto , { fontSize: 18 } ]}>{route.title}</Text>
        </View>)
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={props =>
            <TabBar
              {...props}
              renderLabel={this.renderLabel}
              renderIndicator={() => {} }
              style={{ backgroundColor: 'rgba(52, 52, 52, 0.9)', paddingTop: 10 }}
            />
          }
      />
    );
  }
}