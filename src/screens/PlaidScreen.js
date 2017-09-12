import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Config from '../../config.json';
import PlaidAuthenticator from 'react-native-plaid-link';
import qs from 'qs';
import axios from 'axios';
import { auth, provider } from '../../firebase.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class PlaidScreen extends React.Component {
  // eslint-disable-next-line
  static navigationOptions = {
    title: 'Link Account',
  };
  constructor() {
    super();
    this.state = {
      linkButtonPressed: false
    };
    this.onMessage = this.onMessage.bind(this);
    this.exchangePublicToken = this.exchangePublicToken.bind(this);
  }

  render() {
    return (
      this.state.linkButtonPressed ? this.renderPlaidLink() : this.renderLinkButton()
    );
  }

  renderLinkButton() {
    return (
      <View style={styles.container}>
        <Button title={'Link Your Bank Account'} onPress={ () => this.setState({linkButtonPressed: true})} />
      </View>
    )
  }

  renderPlaidLink() {
    return (
      <PlaidAuthenticator
        onMessage={this.onMessage}
        publicKey = {Config.REACT_APP_PLAID_PUBLIC_KEY}
        env='sandbox'
        product='auth,transactions'
        clientName='Wheres My Money'
     />
    )
  }

  onMessage(data) {
    if (data.action === 'plaid_link-undefined::connected') {
      console.log(data);
      this.setState(
        {linkButtonPressed: false},
        () => this.exchangePublicToken(data.metadata.public_token)
      )
    }
  }

  exchangePublicToken(public_token) {
    console.log('public token: ', public_token)
    let config = {
      url: 'http://localhost:5000/testproject-6177f/us-central1/exchangePublicToken',
      payload: qs.stringify({
        publicToken: public_token,
        uniqueUserId: auth.currentUser.uid
      })
    };
    axios.post(config.url, config.payload)
    .then(() => this._navigateToDashboard())
    .catch(error => { console.log(error);});
  }

  _navigateToDashboard = () => {
    this.props.navigation.navigate('Dashboard');
  }
}