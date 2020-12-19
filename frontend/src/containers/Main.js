import React, {useEffect, useState} from 'react';
import {
    makeStyles,
    Typography,
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getPictures} from "../store/actions/picturesActions";
import ModalPic from "../components/UI/Modal/Modal";
import GalleryItem from "../components/GalleryItem/GalleryItem";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
}));

const Main = () => {
    const classes = useStyles();
    const {pictures, picturesError} = useSelector(state => state.pictures);
    const {user} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [picture, setPicture] = useState({
        img: '',
        name: ''
    });
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        dispatch(getPictures());
    }, [dispatch]);

    const handleOpen = (img, name) => {
        setOpenModal(true);
        setPicture({
            img: img,
            name: name
        });
    }

    const handleClose = () => {
        setPicture({
            img: '',
            name: ''
        });
        setOpenModal(false);
    }

    return (
        <>
            <Typography
                variant='h5'
                component='h5'
                align='center'
                gutterBottom
            >
                Галерея
            </Typography>
            <div className={classes.root}>
               <GalleryItem
                   pictures={pictures}
                   picturesError={picturesError}
                   handleOpen={handleOpen}
                   user={user}
               />
            </div>
            <ModalPic
                img={picture.img}
                name={picture.name}
                open={openModal}
                handleClose={handleClose}
            />
        </>
    );
};

export default Main;