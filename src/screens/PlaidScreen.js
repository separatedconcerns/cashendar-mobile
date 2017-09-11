import React from 'react';
import { StyleSheet, Text, View, Button, AppRegistry } from 'react-native';
import { StackNavigator} from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class PlaidScreen extends React.Component {
  static navigationOptions = {
    title: 'Link Account',
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
        <Button title={'Link Your Bank Account'} onPress={this._handlePress} />
      </View>
    );
  }
  _handlePress = () => {
    this.props.navigation.navigate('Home');
  }
}