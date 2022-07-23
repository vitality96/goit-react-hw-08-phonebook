import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getLoggedIn } from "redux/auth/auth-selectors";

const HomeView = () => {

    const isLoggedIn = useSelector(getLoggedIn);

    return (
        <main>
                <h1> Welcome to Phonebook! </h1>
                {!isLoggedIn && <p> Please,
                    <NavLink to="/register">
                        sign up
                    </NavLink>
                    or
                    <NavLink to="/login">
                        sign in
                    </NavLink>
                    to continue.
                </p>}
                {isLoggedIn && <p> You can manage your phonebook <NavLink to="/contacts">
                    here.
                </NavLink> </p>}
        </main>
    )
}

export default HomeView;