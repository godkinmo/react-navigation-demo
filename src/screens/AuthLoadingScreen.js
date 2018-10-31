import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import * as appActions from '../reducers/app/actions'

class AuthLoadingScreen extends Component {
  componentDidMount() {
    this.props.dispatch(appActions.init())
  }

  render() {
    return (
      <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
        <Text>loading</Text>
      </View>
    )
  }
}

export default connect()(AuthLoadingScreen)
