export default {
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
    row.age = parseInt(row.age);
    if (row.firstName && row.lastName && !isNaN(row.age)) {
      this._data.push(row);
    }
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
