import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountCircle } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { getUserName } from "redux/auth/auth-selectors";
import { logOut } from "redux/auth/auth-options";
import { getLoggedIn } from "redux/auth/auth-selectors";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    const isLoggedIn = useSelector(getLoggedIn);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = event => {
        setAnchorEl(event.target);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <Typography component="h4" sx={{ fontfamily: 'Raleway', }}>
                {name}
            </Typography>
            {isLoggedIn && (
                <div>
                    <IconButton size="medium"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        sx={{
                            backgroundColor: 'white',
                            marginLeft: '5px',
                        }}>
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem onClick={() => dispatch(logOut())}>Log out</MenuItem>
                    </Menu>
                </div>
            )}
        </Box>
    );
};