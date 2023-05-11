import PropTypes from 'prop-types';
import clsx from 'clsx';

import css from './ContactsItem.module.css';

const ContactsItem = ({ filterContacts, onDeleteContact }) => {
  return (
    <>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <li className={clsx(css['contacts-item'])} key={id}>
            <span>
              {name}: {number}
            </span>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
};

ContactsItem.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
