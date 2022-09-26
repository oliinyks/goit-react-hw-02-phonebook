import React from 'react';
import css from './contactList.module.css';

const ContactList = ({ contactsList, onDeleteContact }) => (
  <ul className={css.items}>
    {contactsList.map(({ id, name, number }) => (
      <li className={css.item} key={id}>
        <p>
          &#9734; {name}: {number}
        </p>
        <button
          className={css.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;
