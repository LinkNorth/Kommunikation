import assert from 'assert';
import sinon from 'sinon';
import model from '../src/model';

describe('Model', function() {
  it('Get data', function() {
    sinon.stub(model, 'fetch').resolves([
      {
        name: 'Viktor Silfverström',
        age: 27,
      },
      {
        name: 'Oskar Nilsson',
        age: 24
      }
    ]);

    return model.getData()
      .then(function(data) {
        assert.deepStrictEqual(data, [
          {
            firstName: 'Viktor',
            lastName: 'Silfverström',
            age: 27,
            over18: true,
          },
          {
            firstName: 'Oskar',
            lastName: 'Nilsson',
            age: 24,
            over18: true,
          }

        ]);
      });
  });
});
