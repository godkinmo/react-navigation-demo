import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { DrawerItems } from 'react-navigation'

class DrawerComponent extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1}}>
        <View style={{ alignItems: 'center'}}>
          <Text>DrawerComponent</Text>
        </View>
        <ScrollView>
          <DrawerItems {...this.props} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default DrawerComponent
