import React from 'react';
import {View, StyleSheet} from 'react-native';
import {StackNavigator, addNavigationHelpers} from 'react-navigation';

import Auth from '../containers/Auth';
import Home from '../containers/Home';

export const AppNavigator = StackNavigator({
  Home: {screen: Home}
});

export default class Navigation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav})} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
