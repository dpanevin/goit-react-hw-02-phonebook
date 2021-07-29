import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { HeadTitle, Section } from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmit = info => {
    const contact = { ...info, id: nanoid() };
    const contactList = this.state.contacts;
    const contactNames = contactList.map(item => {
      return item.name;
    });

    if (contactNames.includes(contact.name)) {
      alert('Такое имя уже есть в списке контактов, придумайте новое имя.');
      return;
    }

    this.setState(() => {
      return {
        contacts: [...contactList, contact],
      };
    });
  };

  onFilterChange = value => {
    this.setState(() => {
      const normalizeValue = value.toLowerCase();
      return {
        filter: normalizeValue,
      };
    });
  };

  onDelete = id => {
    const currentContacts = this.state.contacts.filter(item => item.id !== id);
    this.setState({ contacts: currentContacts });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Section>
        <HeadTitle>Phonebook</HeadTitle>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter filterValue={filter} onFilterChange={this.onFilterChange} />
        <ContactsList
          contacts={contacts}
          filterValue={filter}
          onDelete={this.onDelete}
        />
      </Section>
    );
  }
}
