import { Component } from 'react';
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  addContact = name => {
    const contact = {
      id: shortid.generate(),
      name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleChange = event => {
    this.setState({
      name: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.addContact(this.state.name);

    this.setState({ name: '' });
  };

  render() {
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

        <form onSubmit={ this.handleSubmit }>
          <label htmlFor={ this.nameInput }>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
              value={ this.state.name }
              onChange={ this.handleChange }
          />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <div>
          <h3>Contacts</h3>
          <ul>
            {this.state.contacts.map(({ id, name }) => {
              return (<li key={id}>
                <p>{name}</p>
              </li>);
            })}
          </ul>
        </div>
      </div>
    );
  };
  
};