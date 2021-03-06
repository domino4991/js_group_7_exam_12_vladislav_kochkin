import React from 'react';
import FacebookLoginButton from 'react-facebook-login/dist/facebook-login-render-props';
import {facebookAccess} from "../../constants";
import {useDispatch} from "react-redux";
import {Button} from "@material-ui/core";
import {loginUserFacebook} from "../../store/actions/usersActions";

const FacebookLogin = () => {
    const dispatch = useDispatch();
    const facebookResponse = response => {
        if(response.id) {
            dispatch(loginUserFacebook(response));
        }
    };

    return (
        <FacebookLoginButton
            appId={facebookAccess}
            fields='name,email,picture'
            render={renderProps => {
                return <Button
                    onClick={renderProps.onClick}
                    type="button"
                    color='primary'
                    variant='contained'
                    fullWidth
                >Войти с помощью Facebook</Button>
            }}
            callback={facebookResponse}
        />
    );
};

export default FacebookLogin;