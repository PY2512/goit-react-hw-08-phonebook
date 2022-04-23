import {useState, useEffect} from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Title from 'components/Title/Title';
import './App.css';
import nextId from 'react-id-generator';



function App(){
    const [contacts, setContacts] = useState(() =>
    JSON.parse(window.localStorage.getItem('contacts') ?? []),
    );
    const [filter, setFilter] = useState('');

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (name, number) => {
        const contact = {
            id: nextId(),
            name,
            number,
        };
        contacts.some(
            contact => contact.name.toLowerCase() === name.toLowerCase() || 
        contact.number === number,)
        ? alert(`${name} is allready in contacts`)
        :setContacts(prevState => [...prevState, contact]);
    };

    const oneDeleteContact = id => {
        setContacts(contacts.filter(contact => contact.id !== id)
        );
    };

    const changeFilter = ({ currentTarget: { value } }) => {
        setFilter(value);
    };

    const visibleContacts = () =>
        contacts.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase())
        || contact.number.includes(filter.trim()),
        );

        return (
            <div className="container">
                <Title title="Phonebook"/>
                
                <ContactForm onSubmit={addContact}/>
                <Title title="Contacts"/>
                <Filter value={filter} onChange={changeFilter} />
            <ContactList
                visibleContacts={visibleContacts}
                oneDeleteContact={oneDeleteContact}/>
        </div>
        );
};

export default App;
