import {
    CLEAN_PICTURES,
    CREATE_NEW_PIC_ERROR,
    CREATE_NEW_PIC_REQUEST,
    CREATE_NEW_PIC_SUCCESS, DELETE_PIC_ERROR, DELETE_PIC_SUCCESS,
    GET_PICTURES_ERROR,
    GET_PICTURES_REQUEST,
    GET_PICTURES_SUCCESS, GET_PICTURES_USER_ERROR, GET_PICTURES_USER_SUCCESS
} from "../actionTypes";

const initialState = {
    pictures: null,
    picturesError: null,
    picturesLoading: false
};

export const picturesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PICTURES_REQUEST:
        case CREATE_NEW_PIC_REQUEST:
            return {
                ...state,
                picturesLoading: true
            };
        case CREATE_NEW_PIC_SUCCESS:
        case DELETE_PIC_SUCCESS:
            return {
                ...state,
                picturesError: null,
                picturesLoading: false
            };
        case GET_PICTURES_SUCCESS:
        case GET_PICTURES_USER_SUCCESS:
            return {
                ...state,
                pictures: action.data,
                picturesError: null,
                picturesLoading: false
            };
        case GET_PICTURES_ERROR:
        case CREATE_NEW_PIC_ERROR:
        case DELETE_PIC_ERROR:
        case GET_PICTURES_USER_ERROR:
            return {
                ...state,
                picturesLoading: false,
                picturesError: action.error
            };
        case CLEAN_PICTURES:
            return {
                ...state,
                pictures: null,
                picturesError: null,
                picturesLoading: false
            };
        default:
            return state;
    }
};