import cityReducer from '../../../src/components/city/reducer';

describe('cityReducer', () => {

  it('should not changed the passed state', () => {
    const state = Object.freeze({});
    cityReducer(state, {type: 'INVALID'});
  });

});
