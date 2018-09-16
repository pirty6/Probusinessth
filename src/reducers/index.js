import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
// import {
//   UI_APP,
// } from '../constants/reducers';

import HomeReducer from './data/home';
import SidebarReducer from './data/sidebar';
import FooterReducer from './data/footer';
import ServicesReducer from './data/services';

const reducersJson = {
  // form: formReducer,
  routing: routerReducer,
};

// UI Reducers
// reducersJson[UI_APP] = UIAppReducer;

// Data Reducers

reducersJson['home'] = HomeReducer;
reducersJson['sidebar'] = SidebarReducer;
reducersJson['footer'] = FooterReducer;
reducersJson['services'] = ServicesReducer;

export const reducers = combineReducers(reducersJson);

export default reducers;
