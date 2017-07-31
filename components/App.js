import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import * as firebase from 'firebase';

import Auth from '../containers/Auth';
import Navigation from '../containers/Navigation';

import {onSignIn, onSignOut} from '../actions/Auth';
import {resetLogState} from '../actions/log';

class App extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.onSignIn(user);
      } else {
        this.props.onSignOut();
      }
    });
  }

  render() {
    if (!this.props.signedIn) {
      return <Auth />;
    }

    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    signedIn: state.auth.signedIn
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: (user) => {
      dispatch(onSignIn(user));
    },
    onSignOut: () => {
      dispatch(onSignOut());
      dispatch(resetLogState());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
