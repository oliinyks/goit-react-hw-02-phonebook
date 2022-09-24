import React from 'react';
import css from './phonebook.module.css';
// import { render } from "react-dom";

class Phonebook extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
	const name = this.state;
	const number = this.state;

    return (
      <section className={css.phonebook}>
        <h1 className={css.title}>Your amazing phonebook</h1>

        <label className={css.label} htmlFor="user_name">
          Name
        </label>
        <input
          className={css.input}
          type="text"
          value={name}
          onChange={this.handleInputChange}
          name="name"
          id="user_name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className={css.label} htmlFor="user_number">Number</label>
        <input
		   className={css.input}
          type="tel"
			 value={number}
          onChange={this.handleInputChange}
          name="number"
			 id='user_number'
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={css.button} type="button">
          Add contact
        </button>
        <h2 className={css.subtitle}>Contacts</h2>
        <p className={css.text}>You have no contacts</p>
      </section>
    );
  }
}
export default Phonebook;
