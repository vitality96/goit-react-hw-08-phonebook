import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contact-selectors';
import { filterContacts } from 'redux/contacts/contact-actions';
import s from './Filter.module.css';



export default function Filter() {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleChange = event => dispatch(filterContacts(event.target.value));

    return (
        <label className={s.label}>Find contacts by name
            <input
                className={s.input}
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange}>
            </input>
        </label>
    );
};

