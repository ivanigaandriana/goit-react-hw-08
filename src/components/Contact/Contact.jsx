import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contactsOps";

const  Contact=({id, name, number})=> {
  const dispatch = useDispatch();
  
   const onDelete = (contactId) => {
    //  const action = deleteContact(contactId);
     dispatch(deleteContactThunk(contactId));
   }
 
   return (
     <div className={css.contactContainer}>
       <div className={css.contactItem}>
         <span>{name}</span> 
         <span>{number}</span>
       </div>
       <button onClick={() => {onDelete(id)}}>Delete</button>
     </div>
   );
 }
 
 export default Contact;