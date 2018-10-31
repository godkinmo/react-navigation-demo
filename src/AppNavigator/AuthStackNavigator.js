import { createStackNavigator } from 'react-navigation'

// Screens
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
})

export default AuthStackNavigator
