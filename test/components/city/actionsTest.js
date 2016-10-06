import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
import {getCity, cityRequest, cityOk, cityErr} from '../../../src/components/city/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const PLACE_ID = 'ChIJ0RhONcBEFkcRv4pHdrW2a7Q';

const mockedPayload = {
  "result" : {
    "address_components" : [
      {
        "long_name" : "Kraków",
        "short_name" : "Kraków",
        "types" : [ "locality", "political" ]
      },
      {
        "long_name" : "Kraków",
        "short_name" : "Kraków",
        "types" : [ "administrative_area_level_3", "political" ]
      },
      {
        "long_name" : "Poland",
        "short_name" : "PL",
        "types" : [ "country", "political" ]
      }
    ],
    "geometry" : {
      "location" : {
        "lat" : 50.06465009999999,
        "lng" : 19.9449799
      }
    },
    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
    "id" : "22ee34a1db0c617129e62cb84d1eb7162afceb98",
    "name" : "Kraków",
    "place_id" : "ChIJ0RhONcBEFkcRv4pHdrW2a7Q",
    "vicinity" : "Kraków"
  },
  "status" : "OK"
};

describe('getCity', () => {

  let fetchMock;

  beforeAll(() => {
    require('isomorphic-fetch');
    fetchMock = require('fetch-mock');
  });

  afterAll(() => {
    fetchMock.restore();
    fetchMock = undefined;
  });

  describe('when fetching data was successful', () => {

    beforeEach(() => {
      fetchMock.get('*', {body: mockedPayload});
    });

    it('should dispatch city_request and city_ok actions', (done) => {
      const expectedActions = [cityRequest(), cityOk(mockedPayload)];
      const store = mockStore({});
      store.dispatch(getCity(PLACE_ID))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

  });

  describe('when fetching was unsuccessful', () => {

    const error = 404;

    beforeEach(() => {
      fetchMock.mock({
        routes: {
          name: 'city',
          matcher: '*',
          response: error
        }
      });
      // fetchMock.get('*', {status: error});
    });

    it('should dispatch city_request and city_err actions', (done) => {

      const expectedActions = [cityRequest(), cityErr(error)];
      const store = mockStore({});
      store.dispatch(getCity(PLACE_ID))
        .catch(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

  });

});
