/* Combine all available reducers to a single root reducer.
 */
import { combineReducers } from 'redux';
import cityReducer from '../components/city-panel/reducer';
import forecastReducer from '../components/forecast-panel/reducer';

const reducers = { cityReducer, forecastReducer };
const combined = combineReducers(reducers);

// module.exports = combined;
export default combined;
