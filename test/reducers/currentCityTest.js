var reducer = require('../../src/reducers/currentCity');
var cityReducer = require('../../src/components/city/reducer');

describe('currentCity', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});

describe('cityReducer', () => {

  it('should not changed the passed state', () => {
    const state = Object.freeze({});
    cityReducer(state, {type: 'INVALID'});
  });

});
