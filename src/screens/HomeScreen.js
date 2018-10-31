import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import * as counterActions from '../reducers/counter/actions'

class HomeScreen extends Component {
  render() {
    return (
      <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
        <Text>HomeScreen</Text>
        <Button title="-" onPress={() => this.props.decrement()} />
        <Text>{ this.props.count }</Text>
        <Button title="+" onPress={() => this.props.increment()} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.get('count'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
      increment: () => dispatch(counterActions.increment()),
      decrement: () => dispatch(counterActions.decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
