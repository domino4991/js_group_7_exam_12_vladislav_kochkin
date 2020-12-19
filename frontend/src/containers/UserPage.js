import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cleanPictures, getPicturesUser} from "../store/actions/picturesActions";
import {makeStyles, Typography} from "@material-ui/core";
import GalleryItem from "../components/GalleryItem/GalleryItem";
import ModalPic from "../components/UI/Modal/Modal";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
}));

const UserPage = props => {
    const classes = useStyles();
    const {pictures, picturesError} = useSelector(state => state.pictures);
    const {user} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const [picture, setPicture] = useState({
        img: '',
        name: ''
    });
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        dispatch(getPicturesUser(id));
        dispatch(cleanPictures());
    }, [dispatch, id]);

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
                Галерея {pictures && pictures[0].user.displayName}
            </Typography>
            <div className={classes.root}>
                <GalleryItem
                    pictures={pictures}
                    picturesError={picturesError}
                    handleOpen={handleOpen}
                    user={user}
                    userPics={user._id === id}
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

export default UserPage;