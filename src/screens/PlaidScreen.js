import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Config from '../../config.json';

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
        <Button title={'Link Your Bank Account'} onPress={this._navigateToDashboard} />
      </View>
    );
  }

  _navigateToDashboard = () => {
    this.props.navigation.navigate('Dashboard');
  }
}