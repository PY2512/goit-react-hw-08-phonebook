import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operation';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Title from 'components/Title/Title';
import './App.css';


function App(){
    const isLoading = useSelector((state) => state.contacts.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

        return (
            <div className="container">
                {isLoading && <h1>Loading...</h1>}
                <Title title="Phonebook"/>
                <ContactForm />
                <Title title="Contacts"/>
                <Filter />
            <ContactList />
        </div>
        );
};

export default App;
