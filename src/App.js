import React, {Component} from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Title from 'components/Title/Title';
import './App.css';
import nextId from 'react-id-generator';


class App extends Component {
    state = { contacts: [], filter: "", };

    addContact = ({name, number}) => {
        const {contacts} =this.state;
        const contact = {
            id: nextId(),
            name,
            number,
        };
        contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
        ? alert(`${name} is allready in contacts`)
        :this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts]
        }));
    };

    oneDeleteContact = id => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id !== id)
        }));
    };

    changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    visibleContacts = () => {
        const {contacts, filter} = this.state;
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
        || contact.number.includes(filter),
        );
    };

    render() {
        const {filter} = this.state;
        const {visibleContacts, oneDeleteContact, addContact, changeFilter} = this;
        return (
            <div className='container'>
                <h1>Hello my friend</h1>
                <Title title="Phonebook"/>
                
                <ContactForm onSubmit={addContact}/>
                <Title title="Contacts"/>
                <Filter value={filter} onChange={changeFilter} />
            <ContactList
                visibleContacts={visibleContacts}
                oneDeleteContact={oneDeleteContact}/>
        </div>
        );
    }
}

export default App;
