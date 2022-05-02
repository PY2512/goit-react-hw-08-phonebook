import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Title from 'components/Title/Title';
import './App.css';


function App(){
    

        return (
            <div className="container">
                <Title title="Phonebook"/>
                
                <ContactForm />
                <Title title="Contacts"/>
                <Filter />
            <ContactList />
        </div>
        );
};

export default App;
