import PropTypes from 'prop-types';

import Filter from '../filter';
import ContactsItem from '../contactsItem';

const ContactList = ({ filter, onChange, filterContacts, onDeleteContact }) => {
  return (
    <div>
      <Filter value={filter} onChange={onChange} />

      <ul>
        <ContactsItem
          filterContacts={filterContacts}
          onDeleteContact={onDeleteContact}
        />
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;
