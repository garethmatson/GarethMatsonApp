import {types} from 'src/actions/posts'
import {call, put, takeLatest} from 'redux-saga/effects'
import {postsRequest} from 'src/utils/api'

function* handleFetchPosts() {
  try {
    const response = yield call(postsRequest)
    const posts = yield response.json()

    yield put({
      type: types.FETCH_POSTS_SUCCESS,
      payload: posts,
    })
  } catch (e) {
    yield put({type: types.FETCH_POSTS_FAILURE})
  }
}

export default [takeLatest(types.FETCH_POSTS_REQUEST, handleFetchPosts)]
