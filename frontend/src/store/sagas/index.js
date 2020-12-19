import {takeEvery} from 'redux-saga/effects';
import {
    CREATE_NEW_PIC, DELETE_PIC,
    GET_PICTURES,
    GET_PICTURES_USER,
    LOGIN_FACEBOOK,
    LOGIN_USER,
    LOGOUT_USER,
    REGISTER_USER
} from "../actionTypes";
import {createNewPicSaga, deletePicSaga, getPicturesSaga, getPicturesUserSaga} from "./pictures";
import {loginFacebookSaga, loginUserSaga, logoutUserSaga, registerUserSaga} from "./users";

export function* rootSaga() {
    yield takeEvery(GET_PICTURES, getPicturesSaga);
    yield takeEvery(LOGIN_USER, loginUserSaga);
    yield takeEvery(LOGIN_FACEBOOK, loginFacebookSaga);
    yield takeEvery(REGISTER_USER, registerUserSaga);
    yield takeEvery(LOGOUT_USER, logoutUserSaga);
    yield takeEvery(CREATE_NEW_PIC, createNewPicSaga);
    yield takeEvery(GET_PICTURES_USER, getPicturesUserSaga);
    yield takeEvery(DELETE_PIC, deletePicSaga);
}