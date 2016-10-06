import { createAction } from 'redux-act';
import Service from './service';

export const citySearchRequest = createAction('CITY_SEARCH_REQUEST');
export const citySearchOk = createAction('CITY_SEARCH_OK');
export const citySearchErr = createAction('CITY_SEARCH_ERR');
export const citySearchClear = createAction('CITY_SEARCH_CLEAR');

export function cityClear() {
  return (dispatch) => dispatch(citySearchClear); // why this not work?
}

export function citySearch(name) {
  return (dispatch) => {
    dispatch(citySearchRequest);
    return Service.getInstance().citySearch(name)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`${response.status} (${response.statusText})`);
      })
      .then(payload => dispatch(citySearchOk(payload)))
      .catch(error => {
        dispatch(citySearchErr(error));
      });
  };

}

