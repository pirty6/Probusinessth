import {
  SIDEBAR_FETCH,
} from '../../constants/actionTypes';

const initialState = {
  links: [
    {
      'title': 'Home',
      'link': '/',
    },
    {
      'title': 'Servicios',
      'link': '/servicios',
    },
    {
      'title': 'Contacto',
      'link': '/contacto',
    },
  ],
};

export default function(state = initialState, action = {}) {
  switch (action.type){
    case SIDEBAR_FETCH:
      return {
        ...state,
      };
    default:
      return state;
  }
}
