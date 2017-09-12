import React from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class SettingsScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Dashboard',
  // };
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Your Settings</Text>
      </View>
    );
  }
}
