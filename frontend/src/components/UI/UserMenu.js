import React, {useState} from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const UserMenu = () => {
    const {user} = useSelector(state => state.users);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    return (
        <>
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                color='inherit'
                onClick={e => setAnchorEl(e.currentTarget)}
            >
                {user && user.displayName}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem
                    component={NavLink}
                    to='/user-pics'
                    exact
                >
                    Мои фотографии
                </MenuItem>
                <MenuItem
                    component={NavLink}
                    to='/add-new-recipe'
                    exact
                >
                    Добавить новую фотографию
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        // dispatch(logoutUser())
                        console.log('Click');
                    }}
                >
                    Выход
                </MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;