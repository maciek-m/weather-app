import { URL_API } from '../common/service';

const URL_FORECAST = 'forecast';
const DEFAULT_SOURCE = 'WORLD_WEATHER';

export default class ForecastService {

  static getInstance() {
    if (!this.instance) {
      this.instance = new ForecastService();
    }
    return this.instance;
  }

  forecast(lat, lng) {
    const url =
      `${URL_API}${URL_FORECAST}?latitude=${lat}&longitude=${lng}&source=${DEFAULT_SOURCE}`;
    // const url = 'json-mocks/forecast.json';
    return fetch(url);
  }

}
