import {
  FOOTER_FETCH,
} from '../../constants/actionTypes';

const initialState = {
  footer: {
    'address': 'Circuito del Meson',
    'address_num': '128',
    'address_col': 'Col. El Prado',
    'city': 'Queretaro, Qro',
    'post_code': '76030',
    'email': 'stan@mysteryshack.com',
    'telephone': '442 242 8662',
    'social': [
      {
        'link': 'twitter.com',
        'icon': './assets/twitter.svg',
      },
      {
        'link': 'facebook.com',
        'icon': './assets/facebook.svg',
      },
      {
        'link': 'instagram.com',
        'icon': './assets/instagram.svg',
      },
      {
        'link': 'linkedin.com',
        'icon': './assets/linkedin.svg',
      },
    ],
  },
};

export default function(state = initialState, action = {}) {
  switch (action.type){
    case FOOTER_FETCH:
      return {
        ...state,
      };
    default:
      return state;
  }
}
