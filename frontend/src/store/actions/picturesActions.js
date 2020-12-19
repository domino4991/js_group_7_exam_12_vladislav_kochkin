import {GET_PICTURES, GET_PICTURES_ERROR, GET_PICTURES_REQUEST, GET_PICTURES_SUCCESS} from "../actionTypes";

export const getPicturesRequest = () => ({type: GET_PICTURES_REQUEST});
export const getPicturesSuccess = data => ({type: GET_PICTURES_SUCCESS, data});
export const getPicturesError = error => ({type: GET_PICTURES_ERROR, error});

export const getPictures = () => ({type: GET_PICTURES});