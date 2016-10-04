import { createAction } from 'redux-act';
import Service from './service';

export const cityRequest = createAction('CITY_REQUEST');
export const cityOk = createAction('CITY_OK');
export const cityErr = createAction('CITY_ERR');

export function getCity(placeId) {
  return (dispatch) => {
    dispatch(cityRequest);
    return Service.getInstance().cities(placeId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`${response.status} (${response.statusText})`);
      })
      .then(payload => dispatch(cityOk(payload)))
      .catch(error => {
        dispatch(cityErr(error));
      });
  };
}
