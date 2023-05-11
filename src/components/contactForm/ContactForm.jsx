import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
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

    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({
      name: '',
      number: '',
    });
  };

    render() {
        const { name, number, } = this.state;

    return (
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
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;
