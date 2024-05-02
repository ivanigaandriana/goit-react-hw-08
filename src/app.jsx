import { useEffect } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList'; 
import SearchBox from './components/SearchBox/SearchBox';
import { fetchContactsThunk } from './redux/contactsOps';
import { useDispatch } from 'react-redux';

import './app.css';

function App() {
  const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchContactsThunk());
   }, [dispatch]);
   
  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox  />
      <ContactList  />
    </div>
  );
}



export default App;