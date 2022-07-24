import { Typography } from "@mui/material";
import ContactForm from "components/ContactForm/ContactForm"
import Filter from "components/Filter/Filter"
import { ContactList } from "components/ContactList/ContactList.js";
import { Container } from "./styles/Contacts.styled.jsx";


const ContactsView = () => {
    return (
        <Container>
            <ContactForm />
            <Typography component="h1" variant="h5">
                Contacts
            </Typography>
            <Filter />
            <ContactList />
        </Container>
    )
};

export default ContactsView;