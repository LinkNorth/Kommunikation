import {capitalize} from '../utils';

export default {
  render: function(allFilters, selected) {
    const select = document.createElement('select');
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'No filter';
    defaultOption.value = '';
    select.appendChild(defaultOption);
    if (allFilters) {
      for (const value of allFilters) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = capitalize(value);
        if (value === selected) {
          option.selected = true;
        }

        select.appendChild(option);
      }
    }
    return select;
  }
};
