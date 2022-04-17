import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css'

const ContactList = ({oneDeleteContact, visibleContacts}) => (
    <ul className={style.list}>
        {visibleContacts().map(({id, name, number}) => (
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
);

ContactList.propTypes = {
    oneDeleteContact: PropTypes.func.isRequired,
    visibleContacts: PropTypes.func.isRequired,
};

export default ContactList;