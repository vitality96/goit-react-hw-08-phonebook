import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { addContact } from "redux/contacts/contacts-operations";
import { getContacts } from "redux/contacts/contact-selectors";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("")
    const contact = useSelector(getContacts);
    const dispatch = useDispatch();

    const saveContact = name => {
        const newContact = {
            name: name,
            number: number,
        };

        if (contact.find(us => us.name.toLowerCase() === newContact.name.toLowerCase())) {
            toast.error('Your contact is already in the list!')
            return;
        }
        dispatch(addContact(newContact));
        toast.success('Contact has been successfully added!')
        setName('');
        setNumber('');
    };

    const handleSubmit = event => {
        event.preventDefault();
        saveContact(name);
    };

    const handleChangeName = event => setName(event.target.value);
    const handleChangeNumber = event => setNumber(event.target.value);

    return (
        <Container maxWidth="xs">
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
                    <PersonAddAltRoundedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Add Contact
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, mb: 7, }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        value={name}
                        onChange={handleChangeName}
                        autoFocus
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        name="number"
                        label="Phone number"
                        type="phone"
                        id="number"
                        value={number}
                        onChange={handleChangeNumber}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    />
                    <Button type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>
                        Add Contact
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};
