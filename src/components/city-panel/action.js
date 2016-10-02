// import { GET_CURRENT_CITY } from '../../actions/const';

// function action(parameter) {
//   return { type: GET_CURRENT_CITY, parameter };
// }
import { createAction, createReducer } from 'redux-act';
import Service from './service';

export const CITY_REQUEST = 'CITY_REQUEST';
export const CITY_RESPONDED = 'CITY_RESPONDED';

const cityRequest = createAction(CITY_REQUEST);
const cityResponded = createAction(CITY_RESPONDED);

export function getCity(placeId) {
  return (dispatch, getState) => {
    dispatch({
      type: CITY_REQUEST
    });
    // dispatch(cityRequest);
    return Service.getInstance().cities(placeId)
      .then((response) => {
        if (response.ok) {
          return dispatch({
            type: CITY_RESPONDED,
            city: response.json()
          });
        }
        throw new Error(`${response.status} (${response.statusText})`);
      });
  };
}
