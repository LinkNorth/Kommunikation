import {capitalize} from '../utils';
import filterView from './filterView';

export default {
  render: function(model, onFilterChange) {
    const data = model.getData();
    const columns = model.getColumns();

    const table = document.createElement('table');
    const filters = model.getFilters();
    const header = this._renderHeader(columns, filters, onFilterChange);
    table.appendChild(header);
    const body = this._renderBody(columns, data);
    table.appendChild(body);
    return table;
  },
  _renderHeader: function(columns, filters, onFilterChange) {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    const filtertr = document.createElement('tr');
    for (const column of columns) {
      const th = document.createElement('th');
      th.textContent = capitalize(column);
      tr.appendChild(th);
      const filter = filterView.render(filters.all[column], filters.selected[column]);
      if (typeof onFilterChange === 'function') {
        filter.addEventListener('change', function() {
          onFilterChange(column, filter.value);
        });
      }
      const filterth = document.createElement('th');
      filterth.appendChild(filter);
      filtertr.appendChild(filterth);
    }
    thead.appendChild(tr);
    thead.appendChild(filtertr);
    return thead;
  },
  _renderBody: function(columns, data) {
    const tbody = document.createElement('tbody');
    for (const row of data) {
      const tr = document.createElement('tr');
      for (const column of columns) {
        const td = document.createElement('td');
        td.textContent = row[column];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    return tbody;
  },
};
