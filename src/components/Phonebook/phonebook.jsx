import React from 'react';
import Form from 'components/Form';
import { nanoid } from 'nanoid'
import Notiflix from 'notiflix';
import css from './phonebook.module.css';

class Phonebook extends React.Component {
  state = {
    contacts: [],
	 visible: false,
  };

  formSubmitHandler = ({name, number}) => {
	const newContact = {
		id: nanoid(),
		name,
		number,
	};
	this.setState(({contacts})=> ({
		contacts: [...contacts, newContact],
		visible: true
	}))
	Notiflix.Notify.success('You have just created a new contact');
  }

  deleteContact = contactId => {
	this.setState(prevState => ({
		contacts: prevState.contacts.filter(({id} )=> id !== contactId),
	}));
  };

  render() {
	const {contacts} = this.state;
	const {visible} = this.state;

    return (
      <section className={css.phonebook}>
        <h1 className={css.title}>Your amazing phonebook</h1>
        <Form onSubmit={this.formSubmitHandler}/>
        <h2 className={css.subtitle}>Contacts</h2>
       {visible
		 ?  <ul className={css.items}>{contacts.map(({id, name, number}) => 
		 <li className={css.item} key={id}>
			<p>&#9734; {name}: {number}</p>
			<button 
			className={css.button} 
			type='button' 
			onClick={() => this.deleteContact(id)}>Delete</button>
			</li>)}</ul>
		 : <p className={css.text}>You have no contacts</p>
		 }
      </section>
    );
  }
}
export default Phonebook;
