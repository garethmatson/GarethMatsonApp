import React from 'react'
import {View, StyleSheet, SafeAreaView, Text} from 'react-native'
import {connect} from 'react-redux'
import {NavigationProp, RouteProp} from '@react-navigation/native'
import FilteredList from 'src/components/common/FilteredList'
import Colors from 'src/config/Colors'
import {Post} from 'src/components/posts/types'
import {Comment} from './types'

interface IState {
  comments: Comment[]
  filteredComments: Comment[] | null
}
var timer: ReturnType<typeof setTimeout>
class Comments extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      comments: [],
      filteredComments: null,
    }
  }

  componentDidMount() {
    const {route} = this.props
    const {post} = route.params
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then(response => response.json())
      .then(comments => this.setState({comments}))
  }

  renderCommentItem = ({item}: {item: Comment}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.body}>
          {item.body.trim().replace(/(\r\n|\n|\r)/gm, '')}
        </Text>
      </View>
    )
  }

  filterComments = (filterText: string) => {
    const {comments} = this.state

    if (comments) {
      const newFilteredComments = comments.filter(comment =>
        comment.body.toLowerCase().includes(filterText),
      )
      this.setState({filteredComments: newFilteredComments})
    }
  }
  _onChange = (filterText: string) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      this.filterComments(filterText)
    }, 1000)
  }

  render() {
    const {route} = this.props
    const {post} = route.params
    const {comments, filteredComments} = this.state
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.body}>
            {post.body.trim().replace(/(\r\n|\n|\r)/gm, '')}
          </Text>
        </View>
        <FilteredList
          items={filteredComments || comments}
          renderItem={this.renderCommentItem}
          listName={'Comments'}
          onChange={this._onChange}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    padding: 10,
    backgroundColor: Colors.BLACK,
  },
  root: {
    flex: 1,
    display: 'flex',
    height: '100%',
    backgroundColor: Colors.BLACK,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    color: Colors.WHITE,
  },
  body: {
    color: Colors.WHITE,
    fontSize: 16,
    lineHeight: 20,
  },
})

interface IProps {
  navigation: NavigationProp<any>
  route: RouteProp<{params: {post: Post}}, 'params'>
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Comments)
