import {createReducer} from 'redux-act';
import {defaultState} from '../common/reducer';
import {forecastRequest, forecastOk, forecastErr} from './actions';

const reducer = createReducer({
  [forecastRequest]: (state, payload) => ({  // eslint-disable-line no-unused-vars
    ...state,
    loading: true,
    error: null
  }),
  [forecastOk]: (state, payload) => ({
    ...state,
    loading: false,
    data: payload
  }),
  [forecastErr]: (state, payload) => ({
    ...state,
    loading: false,
    data: null,
    error: payload
  })
}, defaultState);

export default reducer;
