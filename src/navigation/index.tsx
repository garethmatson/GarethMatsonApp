import React from 'react'
import MainNavigator from 'src/components/Main'
import {createStackNavigator} from '@react-navigation/stack'
import Routes from './routes'

const RootStack = createStackNavigator()
const Root = () => (
  <RootStack.Navigator
    initialRouteName={Routes.Main}
    screenOptions={{animationEnabled: false}}>
    <RootStack.Screen
      name={Routes.Main}
      component={MainNavigator}
      options={{headerShown: false}}
    />
  </RootStack.Navigator>
)

export default Root
