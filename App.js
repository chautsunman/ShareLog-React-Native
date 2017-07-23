import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
  }

   componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAELXBVivbvZeNMXbh9qnX9T3fxjJSg1VA",
      authDomain: "share-log-c2f07.firebaseapp.com",
      databaseURL: "https://share-log-c2f07.firebaseio.com",
      projectId: "share-log-c2f07",
      storageBucket: "share-log-c2f07.appspot.com",
      messagingSenderId: "161699951866"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user : user});
      } else {
        this.setState({user: null});
      }
    });
  }

   signInAnonymously() {
    firebase.auth().signInAnonymously()
        .catch((error) => {
          console.log('signInAnonymously error', error);
        });
  }

  signOut() {
    firebase.auth().signOut()
        .catch((error) => {
          console.log('signOut error', error);
        });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text> */}

         <Text>{this.state.user ? this.state.user.uid : ''}</Text>

        <Button
          title='Sign In Anonymously'
          onPress={this.signInAnonymously}
        />
        <Button
          title='Sign Out'
          onPress={this.signOut}
        />
      </View>
    );
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
