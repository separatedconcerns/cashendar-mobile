import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator} from 'react-navigation';
import { auth, provider } from '../../firebase.js';
import { Google } from 'expo';
import Config from '../../config.json';
import firebase from 'firebase';
import qs from 'qs';
import axios from 'axios';
// import Config from './config.json';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor() {
    super();
    this.state = {
      user: null,
    };
    this._login = this._login.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{'Where\'s My Money?'}</Text>
        <Button title={'Sign in with Google'} onPress={this._login} />
      </View>
    );
  }
  _login = () => {
    Google.logInAsync({
      iosClientId: Config.REACT_APP_IOS_CLIENT_ID
    })
      .then( result => {
        if (result.type === 'success') {
          const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken);
          firebase.auth().signInWithCredential(credential);
        }
      })
      .then( () => {
        auth.currentUser.getIdToken()
          .then( idToken => {
            const config = {
              url: 'http://localhost:5000/testproject-6177f/us-central1/addUser',
              payload: qs.stringify({idToken: idToken})
            };
            axios.post(config.url, config.payload)
          })
      })
      .then( () => this._navigateToPlaid())
      .catch( error => console.log(error));
  }

  _navigateToPlaid = () => {
    this.props.navigation.navigate('Plaid');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

