import { put, takeEvery } from 'redux-saga/effects'
import { INCREMENT, INCREMENT_EVENT } from "../constants"

function* incrementTwice(action) {
    yield put({type: INCREMENT});
 }

function* sagaProvider() {
  yield takeEvery(INCREMENT_EVENT, incrementTwice);
}

export default sagaProvider;