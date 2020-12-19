import {GET_PICTURES_ERROR, GET_PICTURES_REQUEST, GET_PICTURES_SUCCESS} from "../actionTypes";

const initialState = {
    pictures: null,
    picturesError: null,
    picturesLoading: false
};

export const picturesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PICTURES_REQUEST:
            return {
                ...state,
                picturesLoading: true
            };
        case GET_PICTURES_SUCCESS:
            return {
                ...state,
                pictures: action.data,
                picturesError: null,
                picturesLoading: false
            };
        case GET_PICTURES_ERROR:
            return {
                ...state,
                picturesLoading: false,
                picturesError: action.error
            };
        default:
            return state;
    }
};