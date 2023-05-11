import Filter from '../filter/Filter';
import ContactsItem from '../contactsItem/ContactsItem';

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

export default ContactList;
