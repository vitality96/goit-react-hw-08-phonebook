import { useSelector } from "react-redux";
import { getLoggedIn } from "redux/auth/auth-selectors";
import { HomeViewLink, ContactsLink } from "./Navigation.styles";

export const Navigation = () => {
    const isLoggedIn = useSelector(getLoggedIn);

    return (
        <div>
            <HomeViewLink to="/home">
                Home page
            </HomeViewLink>
            {isLoggedIn && (
                <ContactsLink to="/contacts">
                    Contacts
                </ContactsLink>
            )}
        </div>
    );
};