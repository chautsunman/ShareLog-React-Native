import React from 'react';
import {View, TextInput, Button} from 'react-native';

export default class LogDetail extends React.Component {
  static navigationOptions = {
    title: 'Log Detail'
  };

  constructor(props) {
    super(props);

    this.state = {
      log: {
        title: ''
      }
    };
  }

  render() {
    return (
      <View>
        <TextInput
          value={this.state.log.title}
          onChangeText={(title) => this.setState({log: {...this.state.log, title}})}
        />

        <Button
          title="Save"
          onPress={() => {
            this.props.save(this.state.log)
                .then(() => {
                  this.props.navigation.goBack();
                });
          }}
        />
      </View>
    );
  }
}
