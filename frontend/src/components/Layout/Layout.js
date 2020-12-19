import React from 'react';
import {CssBaseline, Container} from "@material-ui/core";

const Layout = props => {
    return (
        <>
            <header>header</header>
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