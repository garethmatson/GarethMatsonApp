import React from 'react'
import {View, StyleSheet, SafeAreaView, Text, Image} from 'react-native'
import {connect} from 'react-redux'
import {NavigationProp} from '@react-navigation/native'
import {IAppState} from 'src/reducers'
import {Post} from './types'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Arrow from 'src/images/arrow-right.png'
import Colors from 'src/config/Colors'
import Routes from 'src/navigation/routes'
import FilteredList from 'src/components/common/FilteredList'
import {User} from 'src/components/users/types'

interface IProps {
  navigation: NavigationProp<any>
  posts: Post[] | null
  users: {[email: string]: User} | null
}

interface IState {
  filteredPosts: Post[] | null
  filterText: string
}
var timer: ReturnType<typeof setTimeout>
class Posts extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      filterText: '',
      filteredPosts: this.props.posts,
    }
  }

  onNavigate = (post: Post) => {
    const {navigation} = this.props
    navigation.navigate({
      name: Routes.Comments,
      params: {post: post},
    })
  }

  renderPostItem = ({item}: {item: Post}) => {
    const {users} = this.props
    const _onNavigate = () => {
      this.onNavigate(item)
    }
    return (
      <TouchableOpacity style={styles.container} onPress={_onNavigate}>
        <View style={styles.innerLeftContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View>
            <Text style={styles.body} numberOfLines={3} ellipsizeMode="tail">
              {item.body.trim().replace(/(\r\n|\n|\r)/gm, '')}
            </Text>
          </View>
          {users && users[item.userId].name && (
            <Text style={styles.name}>{`- by ${users[item.userId].name}`}</Text>
          )}
        </View>
        <View style={styles.innerRightContainer}>
          <Image source={Arrow} />
        </View>
      </TouchableOpacity>
    )
  }

  filterPosts = (filterText: string) => {
    const {posts, users} = this.props
    if (posts) {
      const newFilterPosts = posts.filter(
        post =>
          post.body.toLowerCase().includes(filterText) ||
          post.title.toLowerCase().includes(filterText) ||
          (users && users[post.userId].name.toLowerCase().includes(filterText)),
      )
      this.setState({filteredPosts: newFilterPosts})
    }
  }
  _onChange = (filterText: string) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      this.filterPosts(filterText)
    }, 1000)
  }

  render() {
    const {filteredPosts} = this.state
    return (
      <SafeAreaView style={styles.root}>
        <FilteredList
          listName={'Posts'}
          renderItem={this.renderPostItem}
          onChange={this._onChange}
          items={filteredPosts || this.props.posts || []}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    padding: 10,
  },
  innerLeftContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  innerRightContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 18,
    color: Colors.WHITE,
  },
  body: {
    color: Colors.WHITE,
    fontSize: 14,
    lineHeight: 18,
  },
  name: {
    color: Colors.grey,
    fontSize: 12,
    lineHeight: 16,
    marginTop: 5,
  },
  root: {
    flex: 1,
    display: 'flex',
    height: '100%',
    backgroundColor: Colors.BLACK,
  },
})

function mapStateToProps(state: IAppState) {
  return {
    posts: state.posts.posts,
    users: state.users.users,
  }
}

export default connect(mapStateToProps)(Posts)
