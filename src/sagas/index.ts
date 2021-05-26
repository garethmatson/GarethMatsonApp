import {all} from 'redux-saga/effects'
import posts from './posts'

export default function* sagas() {
  yield all([...posts])
}
