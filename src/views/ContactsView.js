import ContactForm from "components/ContactForm/ContactForm"
import Filter from "components/Filter/Filter"
import ContactList from "components/ContactList/ContactList"


const ContactsView = () => {
    return (
        <>
            <ContactForm />
            <h1>Contacts</h1>
            <Filter />
            <ContactList />
        </>
    )
};

export default ContactsView;