import React from 'react'
import {connect} from 'react-redux'
import {Dispatch, bindActionCreators} from 'redux'
import {NavigationContainer} from '@react-navigation/native'
import Root from './navigation'
import {postActions} from './actions/posts'
import {userActions} from './actions/users'

interface IProps
  extends ReduxProps<typeof mapStateToProps, typeof mapDispatchToProps> {}
class ConnectedApp extends React.Component<IProps> {
  componentDidMount() {
    const {actions} = this.props
    actions.posts.fetchPosts()
    actions.users.fetchUsers()
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
      users: bindActionCreators(userActions, dispatch),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)
