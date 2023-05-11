const ContactsItem = ({ filterContacts, onDeleteContact }) => {
    return (
        <>
            {filterContacts.map(({ id, name, number, }) => {
                return (
                    <li key={id}>
                        <p>{name}: {number}</p>
                        <button
                            type="button"
                            onClick={() => onDeleteContact(id)}>
                            Delete
                        </button>
                    </li>
                );
            })}
        </>
    );
};

export default ContactsItem;