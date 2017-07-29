import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import Auth from '../containers/Auth';
import Navigation from '../containers/Navigation';

class App extends React.Component {
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

export default connect(mapStateToProps)(App);
