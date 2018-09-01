import { combineReducers } from 'redux';
import propertiesReducer from 'reducers/properties';
import filterReducer from 'reducers/filters';

export default combineReducers({
  properties: propertiesReducer,
  filters: filterReducer
});
