import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import AppReducers from './reducers';
import AppComponent from './components/App';

import * as firebase from 'firebase';

export default class App extends React.Component {
  store = createStore(
    AppReducers,
    applyMiddleware(
      thunkMiddleware
    )
  );

  componentWillMount() {
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
  }

  render() {
    return (
      <Provider store={this.store}>
        <AppComponent />

        {/* <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View> */}
      </Provider>
    );
  }
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
