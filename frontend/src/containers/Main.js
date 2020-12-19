import React, {useEffect, useState} from 'react';
import {makeStyles,
    GridList,
    GridListTileBar,
    GridListTile,
    Typography,
    ListSubheader
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getPictures} from "../store/actions/picturesActions";
import {NavLink} from "react-router-dom";
import {apiUrl} from "../constants";
import ModalPic from "../components/UI/Modal/Modal";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: '100%',
    },
    link: {
        color: 'inherit',
        fontSize: '14px'
    },
    img: {
        cursor: 'pointer'
    }
}));

const Main = () => {
    const classes = useStyles();
    const {pictures} = useSelector(state => state.pictures);
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
                <GridList
                    cellHeight={180}
                    className={classes.gridList}
                >
                    {pictures ? pictures.map(pic => <GridListTile
                        key={pic._id}
                        cols={0.5}
                    >
                        <img
                            src={apiUrl + '/uploads/' + pic.image}
                            alt={pic.name}
                            className={classes.img}
                            onClick={() => handleOpen(pic.image, pic.name)}
                        />
                        <GridListTileBar
                            title={pic.name}
                            subtitle={
                                <NavLink
                                    to={`/user-pic/${pic.user._id}`}
                                    exact
                                    className={classes.link}
                                >
                                    By: {pic.user.displayName}
                                </NavLink>
                            }
                        />
                    </GridListTile>) : <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">December</ListSubheader>
                    </GridListTile>}
                </GridList>
                <ModalPic
                    img={picture.img}
                    name={picture.name}
                    open={openModal}
                    handleClose={handleClose}
                />
            </div>
        </>
    );
};

export default Main;