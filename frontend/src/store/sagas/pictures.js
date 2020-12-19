import {put} from 'redux-saga/effects';
import {
    createNewPicError,
    createNewPicRequest, createNewPicSuccess,
    getPicturesError,
    getPicturesRequest,
    getPicturesSuccess
} from "../actions/picturesActions";
import axiosBase from "../../axiosBase";
import {toast} from "react-toastify";

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

export function* createNewPicSaga({data}) {
    yield put(createNewPicRequest());
    try {
        const response = yield axiosBase.post('/pictures', data);
        yield put(createNewPicSuccess());
        yield toast.success(response.data.message);
    } catch (e) {
        if(e.response && e.response.data) {
            yield put(createNewPicError(e.response.data));
        } else {
            yield put(createNewPicError(e.message));
        }
    }
}