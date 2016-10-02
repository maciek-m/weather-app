// status: "OK"
// result: name, place-id,
// import Immutable from 'immutable';
import _ from 'lodash';
import {createReducer} from 'redux-act';
import {cityRequest, cityResponded} from './action';


// const defaultState = Immutable.Map({ // eslint-disable-line new-cap
//   isLoading: false,
//   city: {}
// });

const defaultState = {
  isLoading: false,
  response: {}
};

function transform(response) {
  const value = _.pick(response, ['result', 'status']);
  console.log('city response: ', response);
  return value;
}

// const reducer = createReducer({
//   [cityRequest]: (state) => state.set('isLoading', true),
//   [cityResponded]: (state, response) => state.set('isLoading', false)
//     .set('city', transform(response))
// }, defaultState);

const reducer = createReducer({
  [cityRequest]: (state) => ({...state, isLoading: true}),
  [cityResponded]: (state, response) => ({
    ...state,
    isLoading: false,
    response: transform(response)
  })
}, defaultState);

export default reducer;
