import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { max_Name_Len, min_Name_Len, max_Number_Len, min_Number_Len } from "../../utils/conskant";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contactsOps";
import { nanoid } from 'nanoid';


 
    const FeedbackSchema = Yup.object().shape({
        name: Yup.string().required("Required").matches(/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ\s]+$/,
        'Name can only contain letters and spaces').min(min_Name_Len, "Too Short!").max(max_Name_Len, "Too Long!"),
        number:Yup.string().matches(/^[-+\d() ]+$/, 'Invalid phone number format').min(min_Number_Len, "Too Short!").max(max_Number_Len, "Too Long!").required("Required"),
      });
    
      const form_Contact_Form = {
        name: '',
        number: ''
    };
     
    const ContactForm = () => {
        const dispatch = useDispatch();
    
        const handleSubmit = (values, actions) => {
            const newContact = {
                name: values.name,
                number: values.number,
                id: nanoid(),
            };
            dispatch(addContactThunk(newContact));
            actions.resetForm();
        };
    
    return(
<div className={css.formContainer}>
<Formik 
initialValues={form_Contact_Form} 
onSubmit={handleSubmit} 
validationSchema={FeedbackSchema}>
<Form >
    <div className={css.formList}>
<label className={css.formLabel} >Name</label>

    <Field  className={css.formField} type="text" name="name"  /> 
   
    <ErrorMessage name="name" component='p' className={css.formikMes} />
    </div>
    <div  className={css.formList}>
    <label className={css.formLabel} >Number</label>
   
    <Field className={css.formField} type="number" name="number" />
   
    <ErrorMessage name="number" component='p' className={css.formikMes} />
    </div>
    
    <button type="submit">Add contact</button>
</Form>
</Formik>
</div>
    )}

export default ContactForm;