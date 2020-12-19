import {
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS, LOGOUT_USER_ERROR,
    LOGOUT_USER_SUCCESS,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS
} from "../actionTypes";

const initialState = {
    user: null,
    usersError: null
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.data,
                usersError: null
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                usersError: null
            };
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                user: null,
                usersError: null
            };
        case LOGIN_USER_ERROR:
        case REGISTER_USER_ERROR:
        case LOGOUT_USER_ERROR:
            return {
                ...state,
                usersError: action.error
            };
        default:
            return state;
    }
};