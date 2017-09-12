import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import qs from 'qs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class DashboardScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      user: '2T5SetDIL2OJJ8AZtDACuuVUrGz1',
      dailySpending: null,
    };
  }

  componentWillMount() {
    this.getDailySpending();
  }

  getDailySpending() {
    const config = {
      url: 'http://localhost:5000/testproject-6177f/us-central1/getDailySpending',
      payload: qs.stringify({ uniqueUserId: this.state.user }),
    };
    axios.post(config.url, config.payload)
      .then((response) => {
        this.setState({ dailySpending: response.data[Object.keys(response.data)[0]] });
      })
      .catch(console.error);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Your Daily Spending: { this.state.dailySpending ? this.state.dailySpending : 'N/A'}</Text>
      </View>
    );
  }
}
