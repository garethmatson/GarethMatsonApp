import {IAction} from 'src/actions'
import {types} from 'src/actions/users'
import {User} from 'src/components/users/types'

export interface IUsersState {
  users: {[email: string]: User} | null
}

const initialState = {
  users: {},
}

export default function users(
  state: IUsersState = initialState,
  action: IAction,
) {
  switch (action.type) {
    case types.FETCH_USERS_SUCCESS: {
      const result: {[email: string]: User} = {}
      Object.keys(action.payload).forEach(key => {
        result[action.payload[key].id] = action.payload[key]
      })
      return {
        ...state,
        users: result,
      }
    }
    default: {
      return state
    }
  }
}
