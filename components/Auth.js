import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Auth extends React.Component {
  render() {
    return (
      <View>
        {this.props.authStateChanging &&
          <Text>auth state changing</Text>
        }

        {this.props.signedIn &&
          <Text>{this.props.user.uid}</Text>
        }

        {!this.props.signedIn ? (
          <Button
            title='Sign In Anonymously'
            onPress={this.props.signInAnonymously}
          />
        ) : (
          <Button
            title='Sign Out'
            onPress={this.props.signOut}
          />
        )}
      </View>
    );
  }
}
