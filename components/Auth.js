import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import * as firebase from 'firebase';

export default class Auth extends React.Component {
  componentDidMount() {
    // TODO: signed in already
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title='Sign In Anonymously'
          onPress={this.props.signInAnonymously}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
