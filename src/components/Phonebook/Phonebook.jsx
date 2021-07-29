import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { HeadTitle, Section } from './Phonebook.styled';

export class Phonebook extends Component {
  state = {
    contacts: [],
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

  render() {
    const { contacts, filter } = this.state;

    return (
      <Section>
        <HeadTitle>Phonebook</HeadTitle>
        <ContactForm onSubmit={this.onSubmit} />

        <h2>Contacts</h2>
        <Filter filterValue={filter} onFilterChange={this.onFilterChange} />
        <ContactsList contacts={contacts} filterValue={filter} />
      </Section>
    );
  }
}
