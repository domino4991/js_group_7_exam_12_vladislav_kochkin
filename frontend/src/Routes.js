import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./components/Layout/Layout";
import Main from "./containers/Main";
import LoginRegister from "./containers/LoginRegister";
import CreateNewPics from "./containers/CreateNewPics";

const ProtectedRoute = ({isAllowed, redirectTo, ...props}) => {
    return isAllowed ?
        <Route {...props} /> :
        <Redirect to={redirectTo} />
};

const Routes = ({user}) => {
    return (
        <Layout>
            <ToastContainer autoClose={3000} />
            <Switch>
                <Route path='/' exact component={Main} />
                <ProtectedRoute
                    isAllowed={!user}
                    path='/login'
                    exact
                    component={LoginRegister}
                    redirectTo='/'
                />
                <ProtectedRoute
                    isAllowed={!user}
                    path='/register'
                    exact
                    component={LoginRegister}
                    redirectTo='/'
                />
                <ProtectedRoute
                    isAllowed={user}
                    path='/create-new-pic'
                    exact
                    component={CreateNewPics}
                    redirectTo='/'
                />
                <Route render={() => <h1 style={{textAlign: 'center'}}>404 Page Not Found</h1>} />
            </Switch>
        </Layout>
    );
};

export default Routes;