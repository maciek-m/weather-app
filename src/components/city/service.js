import { URL_API } from '../common/service';

const URL_CITIES = 'cities/';

export default class CityService {

  static getInstance() {
    if (!this.instance) {
      this.instance = new CityService();
    }
    return this.instance;
  }

  cities(placeId) {
    const url = URL_API + URL_CITIES + placeId;
    // const url = 'json-mocks/ChIJ0RhONcBEFkcRv4pHdrW2a7Q.json';
    return fetch(url);
  }

}
