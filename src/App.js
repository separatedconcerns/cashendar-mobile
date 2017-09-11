import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';
import PlaidScreen from './screens/PlaidScreen.js';
import DashboardScreen from './screens/DashboardScreen.js'
// import Config from './config.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{'Where\'s My Money?'}</Text>
        <Button title={'Sign in with Google'} onPress={this._handlePress} />
      </View>
    );
  }
  _handlePress = () => {
    this.props.navigation.navigate('Plaid');
  }
}

export default StackNavigator({
  Home: {
    screen: App,
  },
  Plaid: {
    screen: PlaidScreen,
  },
  Dashboard: {
    screen: DashboardScreen,
  }
}, App);