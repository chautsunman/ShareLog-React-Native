import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View>
        <Text>UID: {this.props.user.uid}</Text>

        <Button
          title='Sign Out'
          onPress={this.props.signOut}
        />
      </View>
    );
  }
};
