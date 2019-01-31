const groupBy = require('../script').groupBy;
const expect = require('chai').expect;

const mock = [
  {name: 'Viktor', age: 23},
  {name: 'Viktor', age: 27},
  {name: 'Oskar', age: 27},
];

describe("groupBy - expect", function() {
  it("handles empty array", function() {
    const result = groupBy([], "");
    expect(result).to.be.an("object");
    expect(result).to.be.an("object");
    expect(result).to.be.empty;
  });

  it('Handles grouping', function() {
    const result = groupBy(mock, "name");
    expect(result).to.be.an("object");
    expect(result).to.have.all.keys(['Viktor', 'Oskar']);
    expect(result['Viktor']).to.have.lengthOf(2);
    expect(result['Oskar']).to.have.lengthOf(1);
  });

  it('Throws error when object is missing key', function() {
    const data = JSON.parse(JSON.stringify(mock));
    delete data[0].age;
    expect(function() {
      groupBy(data, "age");
    }).to.throw();
  });
});
