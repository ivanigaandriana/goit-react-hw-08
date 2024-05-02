import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts, selectIsLoading, selectIsError } from "../../redux/contactsSlice";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

const ContactList=() =>{
  const isError = useSelector(selectIsError);
const isLoading = useSelector(selectIsLoading);
const contacts = useSelector(selectFilteredContacts);
  if(isError)return <p>Oops, something went wrong</p>;
  if(isLoading)return <p>Loading...</p>;
  if(!contacts.length)return <p>No contacts</p>;

return (
  <ul className={css.contactList}>
    {isLoading && <Loader/>}
    {isError && < ErrorMessage/>}
      {contacts.map((contact) => {
          return (<li className={css.contactListItem} key={contact.id}>
              <Contact name={contact.name} number={contact.number} id={contact.id} />
          </li>)
      })}
  </ul>
);
};
  export default ContactList;
