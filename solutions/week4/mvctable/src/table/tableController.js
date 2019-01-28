import tableView from './tableView';
import tableModel from './tableModel';

export default {
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
