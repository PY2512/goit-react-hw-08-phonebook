import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/contacts-selector';
import style from './ContactList.module.css'
import { deleteContact } from './../../redux/contacts/contacts-operation';


const ContactList = () => {
    const visibleContacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    const oneDeleteContact = id => dispatch(deleteContact(id));

    return (
        <ul className={style.list}>
        {visibleContacts.map(({id, name, number}) => (
            <li key={id} className={style.item}>
                <div className={style.box}>
                    <p className={style.name}>{name}</p>
                    <p className={style.number}>{number}</p>
                    <button className={style.btn}
                    onClick={() => oneDeleteContact(id)}>
                    Delete
                    </button>
                </div>
            </li>
        ))}
    </ul>
    )
};

export default ContactList;