import { persistStore } from 'redux-persist'
import { Provider, connect } from 'react-redux'
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import configureStore from './src/store/configureStore'
import AppNavigator from './src/AppNavigator'
import { PersistGate } from 'redux-persist/integration/react'

const { store, persistor } = configureStore()

const App = reduxifyNavigator(AppNavigator, 'root')
const mapStateToProps = (state) => ({
  state: state.nav,
})
const AppWithNavigationState = connect(mapStateToProps)(App)

export default class Root extends Component {
  loading() {
    return (
      <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]}>
        <ActivityIndicator />
      </View>
    )
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={this.loading()} persistor={persistor}>
          <AppWithNavigationState />
        </PersistGate>
      </Provider>
    )
  }
}
