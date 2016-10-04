import { createAction } from 'redux-act';
import Service from './service';

export const forecastRequest = createAction('FORECAST_REQUEST');
export const forecastOk = createAction('FORECAST_OK');
export const forecastErr = createAction('FORECAST_ERR');

export function getForecast(lat, lng) {
  return (dispatch) => {
    dispatch(forecastRequest);
    return Service.getInstance().forecast(lat, lng)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`${response.status} (${response.statusText})`);
      })
      .then(payload => dispatch(forecastOk(payload)))
      .catch(error => {
        dispatch(forecastErr(error));
      });
  };

}
