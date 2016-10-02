const URL_API = 'http://chathamweatherapi.azurewebsites.net/api/';
const URL_CITIES = 'cities/';

export default class CityPanelService {

  static getInstance() {
    if (!this.instance) {
      this.instance = new CityPanelService();
    }
    return this.instance;
  }

  cities(placeId) {
    const url = URL_API + URL_CITIES + placeId;
    return fetch(url);
  }


}
