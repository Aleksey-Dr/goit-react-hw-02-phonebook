import { Component } from 'react';
import shortid from 'shortid';

import contacts from '../data/contacts';

import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';

export class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    let includesName = false;
    this.state.contacts.map(contact => {
      contact.name === name && (includesName = true);
      return;
    });

    includesName
      ? alert(name + ' is already in contacts')
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    console.log("Delete");
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    const { filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <h2>Phonebook</h2>

        <ContactForm onSubmit={this.addContact} />

        <h3>Contacts</h3>
        <ContactList
          filter={filter}
          onChange={this.changeFilter}
          onDeleteContact={this.deleteContact}
          filterContacts={filterContacts}
        />
      </div>
    );
  }
}
