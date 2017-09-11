import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Config from '../../config.json';
import PlaidAuthenticator from 'react-native-plaid-link';

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
      linkButtonPressed: false
    };
    this.onMessage = this.onMessage.bind(this);
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
    console.log(public_token);
  }

  _navigateToDashboard = () => {
    this.props.navigation.navigate('Dashboard');
  }
}