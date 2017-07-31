import React from 'react';
import {View, FlatList, Text, Button} from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  componentDidMount() {
    this.props.getLogs();
  }

  render() {
    return (
      <View>
        <Text>UID: {this.props.user.uid}</Text>

        <Button
          title='Sign Out'
          onPress={this.props.signOut}
        />

        <FlatList
          data={this.props.logs}
          renderItem={({item}) => <Text>{item.title}</Text>}
        />

        <Button
          title="Add log"
          onPress={() => {this.props.navigation.navigate('LogDetail');}}
        />
      </View>
    );
  }
};
