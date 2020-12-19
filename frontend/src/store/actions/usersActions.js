import {
    CLEAN_USER_ERRORS,
    LOGIN_FACEBOOK,
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS, LOGOUT_USER, LOGOUT_USER_ERROR, LOGOUT_USER_SUCCESS, REGISTER_USER, REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS
} from "../actionTypes";

export const loginUserSuccess = data => ({type: LOGIN_USER_SUCCESS, data});
export const loginUserError = error => ({type: LOGIN_USER_ERROR, error});
export const registerUserSuccess = () => ({type: REGISTER_USER_SUCCESS});
export const registerUserError = error => ({type: REGISTER_USER_ERROR, error});

export const logoutUserSuccess = () => ({type: LOGOUT_USER_SUCCESS});
export const logoutUserError = error => ({type: LOGOUT_USER_ERROR, error});

export const loginUser = data => ({type: LOGIN_USER, data});
export const loginUserFacebook = data => ({type: LOGIN_FACEBOOK, data});
export const registerUser = data => ({type: REGISTER_USER, data});

export const logoutUser = () => ({type: LOGOUT_USER});

export const cleanUsersError = () => ({type: CLEAN_USER_ERRORS});