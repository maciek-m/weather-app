/* Combine all available reducers to a single root reducer.
 */
import { combineReducers } from 'redux';
// import currentCity from './currentCity.js';
import cityReducer from '../components/city-panel/reducer';

const reducers = { cityReducer };
const combined = combineReducers(reducers);

// module.exports = combined;
export default combined;
