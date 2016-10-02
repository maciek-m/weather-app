/* Combine all available reducers to a single root reducer.
 */
import { combineReducers } from 'redux';
import currentCity from './currentCity.js';

const reducers = { currentCity };
const combined = combineReducers(reducers);

// module.exports = combined;
export default combined;
