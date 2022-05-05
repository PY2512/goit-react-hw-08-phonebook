import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import { getContacts } from 'redux/contacts/contacts-selector';
import { addContact } from 'redux/contacts/contacts-operation';

import style from './contactForm.module.css'



function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleInputChange = ({ currentTarget: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
        
            case 'number':
                setNumber(value);
                break;
        
            default:
                return;
        }
    };

    const handleBtnSubmit = event => {
        event.preventDefault();
        
        if (name === '' && number === '') {
            return alert('EMPTY')
        }

        contacts.some(
            contact =>
                contact.name.toLowerCase() === name.toLowerCase() ||
                contact.number === number,
        )
        ? alert(`${name} is allready in contacts!`)
        : dispatch(addContact({name, number, id: nextId() }));

        reset()
    };

    const reset = () => {
        setNumber('');
        setName('');
    };

    return (
        <form 
        onSubmit={handleBtnSubmit}
        className={style.form}
        autoComplete="of">
            <label className={style.label}>Name
            <input
            autoFocus
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className={style.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
            >
            </input>
            </label>
            <label className={style.label}>Number
            <input
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            className={style.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
            >
            </input>
            </label>
            <button type="submit" className={style.btn}>Add contact</button>
        </form>
    );
};

export default ContactForm;