import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import s from './ContactsView.module.css'


function ContactsView() {
    return (
        <>
        <h1 className={s.box}>This is Contacts page</h1>

        <ContactForm/>
        <Filter/>
        <ContactList/>
        </>
    )
}

export default ContactsView;