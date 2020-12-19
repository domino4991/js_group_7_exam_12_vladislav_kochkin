import {put} from 'redux-saga/effects';
import {getPicturesError, getPicturesRequest, getPicturesSuccess} from "../actions/picturesActions";
import axiosBase from "../../axiosBase";

export function* getPicturesSaga() {
    yield put(getPicturesRequest());
    try {
        const response = yield axiosBase.get('/pictures');
        yield put(getPicturesSuccess(response.data));
    } catch (e) {
        if(e.response && e.response.data) {
            yield put(getPicturesError(e.response.data.error));
        } else {
            yield put(getPicturesError(e.message));
        }
    }
}