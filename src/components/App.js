// import { Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useMemo } from 'react';
// import { Toaster } from 'react-hot-toast';
// import { useGetAllContactsQuery } from 'service/contactsAPI';
// import ContactForm from "./ContactForm/ContactForm";
// import Filter from "./Filter/Filter";
// import ContactList from "./ContactList/ContactList";
// import HomeView from 'views/HomeView';
// import s from './App.module.css'
// import { Suspense } from 'react';


export default function App() {
  // const { data = [], isError, error, isLoading, isSuccess } = useGetAllContactsQuery();
  // const filter = useSelector(state => state.filter.value);
  // const renderContactList = useMemo(() =>
  //   data
  //     .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  //     .sort((a, b) => a.name.localeCompare(b.name)
  //   ), [data, filter]);


  return (
    <>
      <h1>Please Wait</h1>
    {/* <Suspense fallback={<div>Loading...</div>}>
    <Routes>
        <Route>
          <Route path="/" element={<HomeView />} />
        </Route>
    </Routes> */}
    {/* <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={s.title}>Contacts</h2>
      {isError && (<p className={s.error}>An error occurred: {error}</p>)}
      {isLoading && <p className={s.text}>Loading...</p>}
      <Filter />
      {isSuccess && <ContactList contacts={renderContactList} />}
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      </div> */}
        {/* </Suspense> */}
      </>
  );
}