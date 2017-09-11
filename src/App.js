import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import { StackNavigator} from 'react-navigation';
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
    title: 'Sign In',
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
    this.props.navigation.navigate('Home');
  }
}

// const WheresMyMoney = StackNavigator({
//   Home: { screen: App },
// });
// AppRegistry.registerComponent('WhereMyMoney', () => WheresMyMoney);

export default StackNavigator({
  Home: {
    screen: App,
  },
}, App);