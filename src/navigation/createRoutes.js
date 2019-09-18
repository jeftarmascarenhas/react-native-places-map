import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import AuthLoading from '../screens/authLoading'
import SignIn from '../screens/signIn'
import Maps from '../screens/maps'

const AuthStack = createStackNavigator(
  {
    SignIn,
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none',
  },
)

const MainStack = createStackNavigator(
  {
    Maps,
  },
  {
    initialRouteName: 'Maps',
    headerMode: 'none',
  },
)

const AppStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
  },
  {
    headerMode: 'none',
  },
)

const SwitchApp = createSwitchNavigator(
  {
    AuthLoading,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

const createRootNavigator = createAppContainer(SwitchApp)

export default createRootNavigator
