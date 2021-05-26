import {IAction} from 'src/actions'
import {types} from 'src/actions/posts'

type Post = {
  userId: number
  id: number
  title: string
  body: string
}
export interface IPostsState {
  posts: Post[] | null
}

const initialState = {
  posts: null,
}

export default function posts(
  state: IPostsState = initialState,
  action: IAction,
) {
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
