import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "../../src/redux/contacts/operations";
import ContactForm from "../../src/components/ContactForm/ContactForm";
import ContactList from "../../src/components/ContactList/ContactList";
import SearchBox from "../../src/components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";
const ContactsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContactsThunk());
    }, [dispatch]);
    return (
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    )
}
export default ContactsPage;