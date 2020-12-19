import React, {useState} from 'react';
import {Typography, Button, makeStyles} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import FormElement from "../components/UI/FormElement/FormElement";
import FacebookLogin from "../components/FacebookLogin/FacebookLogin";
import {loginUser, registerUser} from "../store/actions/usersActions";

const useStyles = makeStyles(() => ({
    form: {
        maxWidth: '400px',
        margin: '0 auto'
    }
}));

const LoginRegister = (props) => {
    const classes = useStyles();
    const {usersError} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const url = props.match.url;

    const [user, setUser] = useState({
        username: '',
        password: '',
        displayName: ''
    });

    const onFieldsChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const getFieldError = fieldName => {
        try {
            return usersError.errors[fieldName].message;
        } catch (e) {
            return null;
        }
    };

    const onSubmittedForm = e => {
        e.preventDefault();
        if(url === '/login') {
            dispatch(loginUser({username: user.username, password: user.password}));
        } else {
            dispatch(registerUser({...user}));
        }
        setUser({
            username: '',
            password: '',
            displayName: ''
        });
    }

    return (
        <>
            <Typography
                variant='h6'
                component='h6'
                align='center'
                gutterBottom
            >
                {url === '/login' ? 'Вход' : 'Регистрация'}
            </Typography>
            <form
                className={classes.form}
                onSubmit={e => onSubmittedForm(e)}
            >
                <FormElement
                    label='Логин'
                    id='form-login'
                    name='username'
                    type='text'
                    value={user.username}
                    error={getFieldError('username')}
                    changed={e => onFieldsChange(e)}
                />
                <FormElement
                    label='Пароль'
                    id='form-pass'
                    name='password'
                    type='password'
                    value={user.password}
                    error={getFieldError('password')}
                    changed={e => onFieldsChange(e)}
                />
                {url === '/register' && <FormElement
                    label='Имя'
                    id='form-displayName'
                    name='displayName'
                    type='text'
                    value={user.displayName}
                    error={getFieldError('displayName')}
                    changed={e => onFieldsChange(e)}
                />}
                <Button
                    fullWidth
                    color='primary'
                    variant='outlined'
                    type='submit'
                >
                    {url === '/register' ? 'Регистрация' : 'Вход'}
                </Button>
                <Typography
                    variant='body1'
                    component='p'
                    style={{margin: '10px 0'}}
                >
                    или войти с помощью facebook
                </Typography>
                <FacebookLogin />
            </form>
        </>
    );
};

export default LoginRegister;