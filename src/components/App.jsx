import { Component } from 'react';
import shortid from 'shortid';

import contacts from '../data/contacts';

export class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
    name: '',
    number: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleChangeName = event => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleChangeNumber = event => {
    this.setState({
      number: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.addContact(this.state.name, this.state.number);

    this.setState({
      name: '',
      number: '',
    });
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value
    });
  };

  render() {
    const { name, number, filter } = this.state;

    const normalizedFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));

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

        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInput}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChangeName}
            />
          </label>

          <label htmlFor={this.numberInput}>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChangeNumber}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <div>
          <h3>Contacts</h3>
          <label>Find contacts by name
            <input
              type="text"
              value={filter}
              onChange={this.changeFilter}
            />
          </label>
          <ul>
            {filterContacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  <p>{name}: {number}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
