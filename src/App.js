import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';
import PlaidScreen from './screens/PlaidScreen.js';
import DashboardScreen from './screens/DashboardScreen.js';
import SignInScreen from './screens/SignInScreen.js';

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
      loggedIn: false,
    };
  }

  componentWillMount() {
    this.state.loggedIn ? this.navigateToDashboard() : this.navigateToSignIn();    
  }

  render() {
    return (
      <View style={styles.container}>
        {/* TODO: Display a loading icon/splash screen */}
      </View>
    );
  }

  navigateToDashboard = () => {
    this.props.navigation.navigate('Dashboard');
  }

  navigateToSignIn = () => {
    this.props.navigation.navigate('SignIn');
  }
}

export default StackNavigator({
  App: {
    screen: App
  },
  SignIn: {
    screen: SignInScreen,
  },
  Plaid: {
    screen: PlaidScreen,
  },
  Dashboard: {
    screen: DashboardScreen,
  }
}, App);