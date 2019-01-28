(function () {
  'use strict';

  var formView = {
    render: function() {
      const form = document.createElement('form');

      const firstName = document.createElement('input');
      firstName.type = 'text';
      firstName.setAttribute('placeholder', 'First name');

      const lastName = document.createElement('input');
      lastName.type = 'text';
      lastName.setAttribute('placeholder', 'Last name');

      const age = document.createElement('input');
      age.type = 'number';
      age.setAttribute('placeholder', 'Age');

      const submit = document.createElement('button');
      submit.type = 'submit';
      submit.textContent = 'Submit';

      form.appendChild(firstName);
      form.appendChild(lastName);
      form.appendChild(age);
      form.appendChild(submit);

      return {
        form: form,
        firstName: firstName,
        lastName: lastName,
        age: age,
      };
    }
  };

  var formController = {
    init: function(container, onNewData) {
      const obj = formView.render();
      const form = obj.form;
      
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const firstName = obj.firstName.value;
        const lastName = obj.lastName.value;
        const age = obj.age.value;
        if (typeof onNewData === 'function') {
          onNewData({firstName: firstName, lastName: lastName, age: age});
        }

        obj.firstName.value = "";
        obj.lastName.value = "";
        obj.age.value = "";
      });

      container.appendChild(form);
    }
  };

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  var filterView = {
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

  var tableView = {
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

  var tableModel = {
    _data: [],
    _filter: {},
    getData: function() {
      const columns = this.getColumns();
      return this._data.filter(x => {
        for (const column of columns) {
          const filter = this._filter[column];
          if (filter && x[column] !== filter) return false;
        }
        return true;
      });
    },
    getColumns: function() {
      return [
        'firstName', 'lastName', 'age'
      ];
    },
    addRow: function(row) {
      this._data.push(row);
    },
    getFilters: function() {
      const columns = this.getColumns();
      const filters = {};
      for (const row of this._data) {
        for (const column of columns) {
          if (!filters[column]) filters[column] = new Set();
          filters[column].add(row[column]);
        }
      }

      return {
        all: filters,
        selected: this._filter,
      };
    },
    setFilter: function(column, value) {
      if (!value) {
        delete this._filter[column];
      } else {
        this._filter[column] = value;
      }
    }
  };

  var tableController = {
    addData: function(data) {
      tableModel.addRow(data);
      this.update();
    },
    init: function(parent) {
      this.container = document.createElement('div');
      this.container.className = 'table';
      parent.appendChild(this.container);
      this.update();
    },
    update: function() {
      this.container.innerHTML = "";
      let view = tableView.render(tableModel, (column, value) => {
        tableModel.setFilter(column, value);
        this.update();
      });
      this.container.appendChild(view);
    }
  };

  const main = document.querySelector('main');
  formController.init(main, function(data) {
    tableController.addData(data);
  });

  tableController.init(main);

}());
