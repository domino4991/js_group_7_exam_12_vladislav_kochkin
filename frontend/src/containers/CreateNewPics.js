import React, {useState} from 'react';
import {Typography, makeStyles, Button} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import FormElement from "../components/UI/FormElement/FormElement";
import {createNewPic} from "../store/actions/picturesActions";
import {push} from 'connected-react-router';

const useStyles = makeStyles(() => ({
    form: {
        maxWidth: '500px',
        margin: '0 auto'
    }
}));

const CreateNewPics = () => {
    const classes = useStyles();
    const {picturesError} = useSelector(state => state.pictures);
    const dispatch = useDispatch();
    const [pic, setPic] = useState({
        name: '',
        image: ''
    });

    const onChangeField = e => {
        const name = e.target.name;
        const value = e.target.value;
        setPic(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onChangeFile = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setPic(prevState => ({
            ...prevState,
            [name]: file
        }));
    };

    const getFieldError = fieldName => {
        try {
            return picturesError.errors[fieldName].message;
        } catch (e) {
            return null;
        }
    };

    const onSubmittedForm = e => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(pic).forEach(key => {
            formData.append(key, pic[key]);
        });
        dispatch(createNewPic(formData));
        setPic({
            image: '',
            name: ''
        });
        setTimeout(() => {
            dispatch(push('/'));
        }, 3000);
    }

    return (
        <>
            <Typography
                variant='h5'
                component='h5'
                align='center'
                gutterBottom
            >
                Создание новой фотографии
            </Typography>
            <form
                className={classes.form}
                onSubmit={e => onSubmittedForm(e)}
            >
                <FormElement
                    label='Название'
                    id='form-pic-name'
                    changed={e => onChangeField(e)}
                    name='name'
                    type='text'
                    error={getFieldError('name')}
                    value={pic.name}
                />
                <FormElement
                    label='Картинка'
                    id='form-pic-image'
                    changedFile={e => onChangeFile(e)}
                    name='image'
                    type='file'
                    error={getFieldError('image')}
                    value={pic.image}
                />
                <Button
                    variant='contained'
                    color='primary'
                    fullWidth
                    type='submit'
                >
                    Отправить
                </Button>
            </form>
        </>
    );
};

export default CreateNewPics;