import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import { Toolbar } from "@mui/material";
import { Container } from '@mui/material';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu.js';
import { getLoggedIn } from "redux/auth/auth-selectors";


const HeaderAppBar = () => {
    const isLoggedIn = useSelector(getLoggedIn);

    return (
        <>
            <AppBar
                position="sticky" component="header" sx={{
                    fontfamily: 'Raleway',
                }}>
                <Container maxWidth={'sm'}>
                    <Toolbar disableGutters aria-label="ToolBar"
                        sx={{
                            'justifyContent': 'space-between',
                        }}>
                        <Navigation />
                        {isLoggedIn && <UserMenu />}
                    </Toolbar>
                </Container>
            </AppBar>
            <Outlet />
        </>
    );
};

export default HeaderAppBar;