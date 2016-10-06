// status: "OK"
// result: name, place-id,
// import Immutable from 'immutable';
import _ from 'lodash';
import {createReducer} from 'redux-act';
import {defaultState} from '../common/reducer';
import {cityRequest, cityOk, cityErr} from './actions';

function transformCityData(response) {
  const value = _.pick(response, ['result', 'status']);
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
