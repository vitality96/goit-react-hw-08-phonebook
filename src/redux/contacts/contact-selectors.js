import { createSelector } from "@reduxjs/toolkit";


export const getContact = state => state.contacts.contactList;

export const getFilter = state => state.contacts.contactFilter;

export const getFilterContact = createSelector(
    [getContact, getFilter],
    (contactList, contactFilter) => {
        const lowerCasedFilter = contactFilter.toLowerCase();
        return contactList.filter(({ name }) => name.toLowerCase().includes(lowerCasedFilter));
    }
);