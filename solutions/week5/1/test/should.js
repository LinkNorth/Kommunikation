const groupBy = require('../script').groupBy;
const chai = require('chai');

chai.should();

const mock = [
  {name: 'Viktor', age: 23},
  {name: 'Viktor', age: 27},
  {name: 'Oskar', age: 27},
];

describe("groupBy - should", function() {
  it("handles empty array", function() {
    const result = groupBy([], "");
    result.should.be.an("object");
    result.should.be.empty;
  });

  it('Handles grouping', function() {
    const result = groupBy(mock, "name");
    result.should.be.an("object");
    result.should.have.all.keys(['Viktor', 'Oskar']);
    result['Viktor'].should.have.lengthOf(2);
    result['Oskar'].should.have.lengthOf(1);
  });

  it('Throws error when object is missing key', function() {
    const data = JSON.parse(JSON.stringify(mock));
    delete data[0].age;
    (function() {
      groupBy(data, "age");
    }).should.throw();
  });
});
