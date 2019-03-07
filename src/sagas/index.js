import { put, takeEvery } from 'redux-saga/effects'
import { INCREMENT, INCREMENT_EVENT } from "../constants"

function* incrementTwice(action) {
    yield put({type: INCREMENT});
 }

function* mySaga() {
  yield takeEvery(INCREMENT_EVENT, incrementTwice);
}

export default mySaga;