import assert from 'assert';
import tableModel from '../src/table/tableModel';

function addTestRow(firstName, lastName, age) {
  const row = {
    firstName: firstName || 'Tester',
    lastName: lastName || 'Testerson',
    age: age || '35',
  };

  tableModel.addRow(row);
  return row;
}

describe('Table Model', function() {

  afterEach(function() {
    tableModel._data = [];
    tableModel._filter = {};
  });

  it('Can add row', function() {
    const row = addTestRow();
    const data = tableModel.getData();
    assert.deepStrictEqual(data, [row]);
  });

  it('Doesnt add row with invalid data', function() {
    const row = {
      firstName: undefined,
      lastName: undefined,
      age: undefined,
    };

    tableModel.addRow(row);
    assert.strictEqual(tableModel.getData().length, 0);
  });

  it('Can set filter', function() {
    addTestRow();
    const testRow = addTestRow('Karl');
    assert.strictEqual(tableModel.getData().length, 2);
    tableModel.setFilter('firstName', 'Karl');
    const data = tableModel.getData();
    assert.strictEqual(data.length, 1);
    assert.deepStrictEqual(data, [testRow]);
  });

  it('Can unset filter', function() {
    addTestRow();
    addTestRow('Karl');
    assert.strictEqual(tableModel.getData().length, 2);
    tableModel.setFilter('firstName', 'Karl');
    assert.strictEqual(tableModel.getData().length, 1);
    tableModel.setFilter('firstName', undefined);
    assert.strictEqual(tableModel.getData().length, 2);
  });

  it('Can return columns', function() {
    const columns = tableModel.getColumns();
    assert.ok(columns.length > 0);
    for (let column of columns) {
      assert.equal(typeof column, 'string');
    }
  });
});
