import {takeEvery} from 'redux-saga/effects';
import {GET_PICTURES} from "../actionTypes";
import {getPicturesSaga} from "./pictures";

export function* rootSaga() {
    yield takeEvery(GET_PICTURES, getPicturesSaga);
}