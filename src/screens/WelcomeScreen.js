import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class WelcomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
        <Text>WelcomeScreen</Text>
        <Button title="Login"
          onPress={() => this.props.navigation.push('Login')} />
      </View>
    )
  }
}

export default WelcomeScreen
