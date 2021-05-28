import React from 'react'
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  ListRenderItem,
} from 'react-native'
import Colors from 'src/config/Colors'

interface IProps {
  items: any[]
  renderItem: ListRenderItem<any>
  onChange: (e: string) => void
  listName: string
}

interface IState {
  filterText: string
}

class FilteredList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      filterText: '',
    }
  }

  _onChange = (filterText: string) => {
    const {onChange} = this.props
    this.setState({filterText})
    onChange(filterText.toLowerCase())
  }

  render() {
    const {filterText} = this.state
    const {items, listName, renderItem} = this.props
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            placeholder={`Search ${listName}...`}
            autoCapitalize="none"
            placeholderTextColor={Colors.WHITE}
            value={filterText}
            onChangeText={this._onChange}
            style={styles.body}
          />
        </View>
        <FlatList
          keyExtractor={(_, index) => `${index}`}
          data={items}
          renderItem={renderItem}
        />
      </View>
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
  root: {
    flex: 1,
    display: 'flex',
    height: '100%',
    backgroundColor: Colors.BLACK,
  },
})

export default FilteredList
