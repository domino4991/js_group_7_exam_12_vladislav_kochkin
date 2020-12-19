import React from 'react';
import {
    Modal,
    makeStyles,
    Button
} from "@material-ui/core";
import {apiUrl} from "../../../constants";

const useStyles = makeStyles(() => ({
    div: {
        textAlign: 'center',
        marginTop: '50px'
    },
    img: {
        width: '100%',
        maxWidth: '700px',
        height: 'auto',
        display: 'block',
        margin: '40px auto 0'
    }
}))

const ModalPic = ({img, open, name, handleClose}) => {
    const path = apiUrl + '/uploads/' + img;
    const classes = useStyles();

    const body = (
        <>
            <img
                src={path}
                alt={name}
                className={classes.img}
            />
            <div className={classes.div}>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={handleClose}>
                    Close
                </Button>
            </div>
        </>
    );

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            {body}
        </Modal>
    );
};

export default ModalPic;