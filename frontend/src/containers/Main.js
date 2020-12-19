import React, {useEffect} from 'react';
import {makeStyles, GridList, GridListTileBar, GridListTile, Typography, ListSubheader} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getPictures} from "../store/actions/picturesActions";
import {NavLink} from "react-router-dom";
import {apiUrl} from "../constants";

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
    }
}));

const Main = () => {
    const classes = useStyles();
    const {pictures} = useSelector(state => state.pictures);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPictures());
    }, [dispatch]);

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
            </div>
        </>
    );
};

export default Main;