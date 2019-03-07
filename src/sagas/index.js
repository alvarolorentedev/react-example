import { takeEvery } from 'redux-saga/effects'
 
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", () => {});
}

export default mySaga;