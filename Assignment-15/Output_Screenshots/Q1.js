import React, { useState } from 'react';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddContact = () => {
    const newContact = { name, email, phone };
    setContacts([...contacts, newContact]);
    setName('');
    setEmail('');
    setPhone('');
  };

  const handleEditContact = (index) => {
    const newContacts = [...contacts];
    newContacts[index].name = prompt('Enter new name');
    newContacts[index].email = prompt('Enter new email');
    newContacts[index].phone = prompt('Enter new phone');
    setContacts(newContacts);
  };

  const handleDeleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />
      <button onClick={handleAddContact}>Add Contact</button>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <p>
              {contact.name} - {contact.email} - {contact.phone}
            </p>
            <button onClick={() => handleEditContact(index)}>Edit</button>
            <button onClick={() => handleDeleteContact(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
