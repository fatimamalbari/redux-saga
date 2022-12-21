import { combineReducers } from 'redux';
import weatherReducer from './reducers/weatherReducer';

const rootReducer = combineReducers({
  weatherReducer: weatherReducer,
})

export default rootReducer;