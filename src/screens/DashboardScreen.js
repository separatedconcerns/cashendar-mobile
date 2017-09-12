import React from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import MapScreen from './MapScreen';
import SettingsScreen from './SettingsScreen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// class DashboardScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Dashboard',
//   };
//   constructor() {
//     super();
//     this.state = {
//       user: null,
//     };
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Your Daily Spending</Text>
//       </View>
//     );
//   }
// }

export default TabNavigator({
  Map: { screen: MapScreen },
  Settings: { screen: SettingsScreen },
});
