import { ContactsListItem, DeleteBtn } from '../Phonebook.styled';

const { Component } = require('react');

export class ContactsList extends Component {
  onClicked = e => {
    const onDelete = this.props.onDelete;

    onDelete(e.target.id);
  };

  render() {
    const contacts = this.props.contacts;
    const filterValue = this.props.filterValue;
    const filteredContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filterValue);
    });

    return (
      <ul>
        {filteredContacts.map(({ name, number, id }) => {
          return (
            <ContactsListItem key={id}>
              {name}: {number}
              <DeleteBtn id={id} onClick={this.onClicked}>
                Удалить
              </DeleteBtn>
            </ContactsListItem>
          );
        })}
      </ul>
    );
  }
}
