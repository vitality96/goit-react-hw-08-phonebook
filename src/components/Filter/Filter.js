import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contact-selectors';
import { filterContacts } from 'redux/contacts/contacts-actions';
import { Box, Container, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



export default function Filter() {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleChange = event => dispatch(filterContacts(event.target.value));

    return (
        <>
            <Container>
                <Box sx={{
                    marginTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <TextField
                        margin="normal"
                        size="small"
                        id="filter"
                        label="Find contacts by name"
                        name="filter"
                        value={filter}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleChange}
                    />
                </Box>
            </Container>
        </>
    );
};

