import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import * as appActions from '../reducers/app/actions'

class SettingsScreen extends Component {
  logout() {
    this.props.dispatch(appActions.logout())
  }

  render() {
    return (
      <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
        <Button title="Logout"
          onPress={() => this.logout()} />
      </View>
    )
  }
}

export default connect()(SettingsScreen)
