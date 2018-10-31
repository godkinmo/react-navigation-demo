import { createSwitchNavigator } from 'react-navigation'
import AppDrawerNavigator from './AppDrawerNavigator'
import AuthStackNavigator from './AuthStackNavigator'

import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const AppNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppDrawerNavigator,
  Auth: AuthStackNavigator,
})

export default AppNavigator
