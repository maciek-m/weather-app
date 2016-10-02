// import { GET_CURRENT_CITY } from '../../actions/const';

// function action(parameter) {
//   return { type: GET_CURRENT_CITY, parameter };
// }
import { createAction } from 'redux-act';
import Service from './service';

const CITY_REQUEST = 'CITY_REQUEST';
const CITY_RESPONDED = 'CITY_RESPONDED';

export const cityRequest = createAction(CITY_REQUEST);
export const cityResponded = createAction(CITY_RESPONDED);

export function getCity(placeId) {
  return (dispatch) => {
    dispatch(cityRequest);
    // return new Promise(resolve => {
    //   Service.getInstance().cities(placeId)
    // }).then(response => {
    //   if (response.ok) {
    //     dispatch(cityResponded(response.json()));
    //   }
    //   throw new Error(`${response.status} (${response.statusText})`);
    // });
    return Service.getInstance().cities(placeId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`${response.status} (${response.statusText})`);
      })
      .then(payload => dispatch(cityResponded(payload)));
  };
}
