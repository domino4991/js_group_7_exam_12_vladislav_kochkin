import {
    CREATE_NEW_PIC,
    CREATE_NEW_PIC_ERROR,
    CREATE_NEW_PIC_REQUEST, CREATE_NEW_PIC_SUCCESS,
    GET_PICTURES,
    GET_PICTURES_ERROR,
    GET_PICTURES_REQUEST,
    GET_PICTURES_SUCCESS
} from "../actionTypes";

export const getPicturesRequest = () => ({type: GET_PICTURES_REQUEST});
export const getPicturesSuccess = data => ({type: GET_PICTURES_SUCCESS, data});
export const getPicturesError = error => ({type: GET_PICTURES_ERROR, error});

export const createNewPicRequest = () => ({type: CREATE_NEW_PIC_REQUEST});
export const createNewPicSuccess = () => ({type: CREATE_NEW_PIC_SUCCESS});
export const createNewPicError = error => ({type: CREATE_NEW_PIC_ERROR, error});

export const getPictures = () => ({type: GET_PICTURES});
export const createNewPic = data => ({type: CREATE_NEW_PIC, data});