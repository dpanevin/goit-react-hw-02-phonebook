import { Component } from 'react';
import { FormInput } from '../Phonebook.styled';

export class Filter extends Component {
  hendleChange = e => {
    const onFilterChange = this.props.onFilterChange;

    onFilterChange(e.target.value);
  };

  render() {
    const filterValue = this.props.filterValue;

    return (
      <label>
        Поиск по списку контактов:
        <FormInput
          onChange={this.hendleChange}
          value={filterValue}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Фильтр"
          required
        />
      </label>
    );
  }
}
