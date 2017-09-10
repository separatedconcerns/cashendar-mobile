import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Config from './config.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
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
      </View>
    );
  }
}
