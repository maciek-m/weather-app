import { URL_API } from '../common/service';

const URL_CITY_SEARCH = 'cities/search';

export default class CitySearchService {

  static getInstance() {
    if (!this.instance) {
      this.instance = new CitySearchService();
    }
    return this.instance;
  }

  citySearch(name) {
    const url = `${URL_API}${URL_CITY_SEARCH}?byName=${name}`;
    // const url = 'json-mocks/city-search.json';
    return fetch(url);
  }

}

