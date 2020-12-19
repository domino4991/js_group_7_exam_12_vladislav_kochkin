import {put} from 'redux-saga/effects';
import {
    loginUserError,
    loginUserSuccess,
    logoutUserError, logoutUserSuccess,
    registerUserError,
    registerUserSuccess
} from "../actions/usersActions";
import axiosBase from "../../axiosBase";
import {push} from 'connected-react-router';
import {toast} from "react-toastify";

export function* loginUserSaga({data}) {
    try {
        const response = yield axiosBase.post('/users/sessions', data);
        yield put(loginUserSuccess(response.data));
        yield push('/');
    } catch (e) {
        if(e.response && e.response.data) {
            yield put(loginUserError(e.response.data));
        } else {
            yield put(loginUserError(e.message));
        }
    }
}

export function* loginFacebookSaga({data}) {
    try {
        const response = yield axiosBase.post('/users/facebookLogin', data);
        yield put(loginUserSuccess(response.data));
        yield push('/');
    } catch (e) {
        if(e.response && e.response.data) {
            yield toast.error(e.response.data.error);
            yield put(loginUserError(e.response.data.error));
        } else {
            yield put(loginUserError(e.message));
        }
    }
}

export function* registerUserSaga({data}) {
    try {
        const response = yield axiosBase.post('/users', data);
        yield toast.success(response.data.message);
        yield put(registerUserSuccess());
    } catch (e) {
        if(e.response && e.response.data) {
            yield put(registerUserError(e.response.data));
        } else {
            yield put(registerUserError(e.message));
        }
    }
}

export function* logoutUserSaga() {
    try {
        const response = yield axiosBase.delete('/users/sessions');
        yield toast.success(response.data.message);
        yield put(logoutUserSuccess());
        yield push('/');
    } catch (e) {
        if(e.response && e.response.data) {
            yield toast.error(e.response.data.error);
            yield put(logoutUserError(e.response.data.error));
        } else {
            yield put(logoutUserError(e.message));
        }
    }
}