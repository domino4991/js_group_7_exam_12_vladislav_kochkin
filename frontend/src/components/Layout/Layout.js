import React from 'react';
import {CssBaseline, Container} from "@material-ui/core";
import HeaderAppBar from "../HeaderAppBar/HeaderAppBar";

const Layout = props => {
    return (
        <>
            <HeaderAppBar />
            <main>
                <CssBaseline />
                <Container>
                    {props.children}
                </Container>
            </main>
        </>
    );
};

export default Layout;