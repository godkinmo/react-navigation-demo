import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import * as appActions from '../reducers/app/actions'

class LoginScreen extends Component {
  login() {
    this.props.dispatch(appActions.login())
  }

  render() {
    return (
      <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
        <Button title="Login"
          onPress={() => this.login()} />
      </View>
    )
  }
}

export default connect()(LoginScreen)
