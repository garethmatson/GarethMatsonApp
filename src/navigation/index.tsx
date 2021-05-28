import React from 'react'
import PostsNavigator from 'src/components/posts/Posts'
import CommentsNavigator from 'src/components/comments/Comments'
import {createStackNavigator} from '@react-navigation/stack'
import Colors from 'src/config/Colors'
import Routes from './routes'

const RootStack = createStackNavigator()
const Root = () => (
  <RootStack.Navigator
    initialRouteName={Routes.Posts}
    screenOptions={{animationEnabled: false}}>
    <RootStack.Screen
      name={Routes.Posts}
      component={PostsNavigator}
      options={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.WHITE,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
    <RootStack.Screen
      name={Routes.Comments}
      component={CommentsNavigator}
      options={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.WHITE,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </RootStack.Navigator>
)

export default Root
