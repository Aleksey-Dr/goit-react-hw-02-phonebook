import Filter from '../filter/Filter';
import ContactsItem from '../contactsItem/ContactsItem';

const ContactList = ({ filter, onChange, filterContacts }) => {
  return (
    <div>
      <Filter value={filter} onChange={onChange} />

      <ul>
        <ContactsItem filterContacts={filterContacts} />
      </ul>
    </div>
  );
};

export default ContactList;
