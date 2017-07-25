import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Auth from '../containers/Auth';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <Auth />
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
