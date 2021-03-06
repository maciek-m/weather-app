import _ from 'lodash';
import {createReducer} from 'redux-act';
import {defaultState} from '../common/reducer';
import {citySearchRequest, citySearchOk, citySearchErr, citySearchClear} from './actions';

function transformData(data) {
  const transformed =
    data.predictions.map((prediction) => _.pick(prediction, ['description', 'place_id']));
  return {
    predictions: transformed
  };
}

const reducer = createReducer({
  [citySearchRequest]: (state, payload) => ({ // eslint-disable-line no-unused-vars
    ...state,
    loading: true,
    error: null
  }),
  [citySearchOk]: (state, payload) => ({
    ...state,
    loading: false,
    data: transformData(payload)
  }),
  [citySearchErr]: (state, payload) => ({
    ...state,
    loading: false,
    data: null,
    error: payload
  }),
  [citySearchClear]: (state, payload) => ({   // eslint-disable-line no-unused-vars
    ...state,
    loading: false,
    data: null,
    error: null
  })
}, defaultState);

export default reducer;
