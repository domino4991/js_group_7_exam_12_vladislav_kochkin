import React from 'react';
import {GridList, GridListTile, GridListTileBar, IconButton, ListSubheader, makeStyles} from "@material-ui/core";
import {apiUrl} from "../../constants";
import {NavLink} from "react-router-dom";
import {deletePic} from "../../store/actions/picturesActions";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {useDispatch} from "react-redux";

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
    },
}));

const GalleryItem = ({pictures, picturesError, handleOpen, user, userPics}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <>
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
                        actionIcon={userPics && user.username === pic.user.username ?
                            <IconButton
                                color='secondary'
                                onClick={() => dispatch(deletePic(pic._id))}
                            >
                                <DeleteForeverIcon />
                            </IconButton> : null}
                    />
                </GridListTile>) : <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">{picturesError}</ListSubheader>
                </GridListTile>}
            </GridList>
        </>
    );
};

export default GalleryItem;