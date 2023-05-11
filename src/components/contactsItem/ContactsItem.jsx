const ContactsItem = ({ filterContacts }) => {
    return (
        <>
            {filterContacts.map(({ id, name, number }) => {
                return (
                    <li key={id}>
                    <p>{name}: {number}</p>
                    </li>
                );
            })}
        </>
    );
};

export default ContactsItem;