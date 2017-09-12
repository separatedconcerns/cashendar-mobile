import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PlaidScreen from './screens/PlaidScreen';
import DashboardScreen from './screens/DashboardScreen';
import SignInScreen from './screens/SignInScreen';

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

  navigateToDashboard = () => {
    this.props.navigation.navigate('Dashboard');
  }

  navigateToSignIn = () => {
    this.props.navigation.navigate('SignIn');
  }

  render() {
    return (
      <View style={styles.container}>
        {/* TODO: Display a loading icon/splash screen */}
      </View>
    );
  }
}

export default StackNavigator({
  App: {
    screen: App,
  },
  SignIn: {
    screen: SignInScreen,
  },
  Plaid: {
    screen: PlaidScreen,
  },
  Dashboard: {
    screen: DashboardScreen,
  },
}, App);
