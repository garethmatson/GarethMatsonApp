/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import {connect} from 'react-redux'
import {Dispatch, bindActionCreators} from 'redux'
import {NavigationContainer} from '@react-navigation/native'
import Root from './navigation'
import {postActions} from './actions/posts'

interface IProps
  extends ReduxProps<typeof mapStateToProps, typeof mapDispatchToProps> {}
class ConnectedApp extends React.Component<IProps> {
  componentDidMount() {
    const {actions} = this.props
    actions.posts.fetchPosts()
  }

  render() {
    return (
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    )
  }
}

const mapStateToProps = () => ({})

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: {
      posts: bindActionCreators(postActions, dispatch),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)
