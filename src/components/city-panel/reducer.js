// status: "OK"
// result: name, place-id,
// import Immutable from 'immutable';
import _ from 'lodash';
import {createReducer} from 'redux-act';
// import { cityAction } from './actions';
import { cityRequest, cityOk, cityErr } from './actions';

// const defaultState = Immutable.Map({ // eslint-disable-line new-cap
//   isLoading: false,
//   city: {}
// });

const defaultState = {
  loading: false,
  data: null,
  error: null
};

function transformCityData(response) {
  const value = _.pick(response, ['result', 'status']);
  // console.log('city response: ', response);
  // console.log('');
  return Object.assign({}, {
    status: value.status,
    name: value.result.name,
    formattedAddress: value.result.formatted_address,
    placeId: value.result.place_id,
    country: value.result.formatted_address.split(',').slice(-1)[0],
    date: new Date(),
    geometry: value.result.geometry
  });
}

// const reducer = createReducer({
//   [cityRequest]: (state) => state.set('isLoading', true),
//   [cityResponded]: (state, response) => state.set('isLoading', false)
//     .set('city', transform(response))
// }, defaultState);

// const reducer = createReducer({
//   [cityRequest]: (state) => ({...state, isLoading: true}),
//   [cityResponded]: (state, response) => ({
//     ...state,
//     isLoading: false,
//     response: transform(response)
//   })
// }, defaultState);

const reducer = createReducer({
  [cityRequest]: (state, payload) => ({
    ...state,
    loading: true,
    error: null
  }),
  [cityOk]: (state, payload) => ({
    ...state,
    loading: false,
    data: transformCityData(payload)
  }),
  [cityErr]: (state, payload) => ({
    ...state,
    loading: false,
    data: null,
    error: payload
  })
}, defaultState);

export default reducer;
