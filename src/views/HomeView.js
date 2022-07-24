import { useSelector } from "react-redux";
import { getLoggedIn } from "redux/auth/auth-selectors";
import { HomeViewContainer, WelcomeMessage, LoginLink, TextContainer, Text } from './styles/HomeView.styled';

const HomeView = () => {

    const isLoggedIn = useSelector(getLoggedIn);

    return (
        <main>
            <HomeViewContainer>
                <WelcomeMessage> Welcome to Phonebook! </WelcomeMessage>
                {!isLoggedIn && <TextContainer> <p> Please,
                    <LoginLink to="/register">
                        sign up
                    </LoginLink>
                    or
                    <LoginLink to="/login">
                        sign in
                    </LoginLink>
                    to continue.
                </p>
                </TextContainer>}
                {isLoggedIn && <Text> You can manage your phonebook <LoginLink to="/contacts">
                    here.
                </LoginLink> </Text>}
                </HomeViewContainer>
        </main>
    )
}

export default HomeView;