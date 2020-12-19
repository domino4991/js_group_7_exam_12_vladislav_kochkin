import React, {useState} from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {logoutUser} from "../../store/actions/usersActions";

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
                    to='/create-new-pic'
                    exact
                >
                    Добавить новую фотографию
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        dispatch(logoutUser())
                    }}
                >
                    Выход
                </MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;