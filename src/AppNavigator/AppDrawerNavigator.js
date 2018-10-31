import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'
import React from 'react'
import { TouchableOpacity, View, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

// Screens
import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

import DrawerComponent from './DrawerComponent'

const { width } = Dimensions.get('window')

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  }
}, {
  // router config
  initialRouteName: 'Home',
  order: ['Home', 'Settings'],

  // navigation for complete tab navigator
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    activeTintColor: '#663399',
    inactiveTintColor: 'grey'
  }
})

const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Your App',
      headerLeft: (
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Icon name="md-menu" size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: AppStackNavigator,
    navigationOptions: {
      title: 'Dashboard',
      drawerIcon: ({ tintColor }) => (
        <Icon name="ios-home" size={24} style={{ color: tintColor }} />
      )
    },
  },
}, {
  contentComponent: props => <DrawerComponent {...props} />,
  drawerWidth: width * 0.85,
  contentOptions: {
    activeTintColor: '#663399'
  }
})

export default AppDrawerNavigator
