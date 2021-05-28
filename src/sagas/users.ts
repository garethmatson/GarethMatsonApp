import {types} from 'src/actions/users'
import {call, put, takeLatest} from 'redux-saga/effects'
import {usersRequest} from 'src/utils/api'

function* handleFetchUsers() {
  try {
    const response = yield call(usersRequest)
    const users = yield response.json()

    yield put({
      type: types.FETCH_USERS_SUCCESS,
      payload: users,
    })
  } catch (e) {
    yield put({type: types.FETCH_USERS_FAILURE})
  }
}

export default [takeLatest(types.FETCH_USERS_REQUEST, handleFetchUsers)]
