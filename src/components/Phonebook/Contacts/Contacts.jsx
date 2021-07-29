const { Component } = require('react');

export class ContactsList extends Component {
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
            <li key={id}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    );
  }
}
