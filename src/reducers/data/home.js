import {
  HOME_FETCH,
  HOME_FETCH_CANCEL,
  HOME_FETCH_FAILED,
  HOME_FETCH_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  currentPage: {
    'title': 'home',
    'body': [
      {
        'type': 'hero',
        'value': {
          'title': 'Pro-business',
          'background_image': null,
          'subtitle': 'talento humano',
        },
      },
      {
        'type': 'sideImage',
        'value': {
          'title': 'Somos un equipo de profesionistas',
          'rectangle':true,
          'smaller_rectangle':true,
          'paragraph': 'que se ocupa por el desarrollo del talento humano, con el objetivo de generar e implementar las estrategias de recursos humanos, que apoyen a tener una mayor estabilidad del personal, generandole a su empresa una mayor rentabilidad y productividad',
          'right_image': false,
          'background_color': '',
          'image': {
            'md': './assets/table600.jpg',
          },
          'cta': {
            'text': '',
            'breed': 'primary',
            'link':'',
          },
        },
      },
      {
        'type': 'sideImage',
        'value': {
          'title': 'Nuestros servicios',
          'rectangle':false,
          'smaller_rectangle':false,
          'paragraph': 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
          'right_image': true,
          'background_color': '',
          'image': {
            'md': './assets/ipad600.jpg',
          },
          'cta': {
            'text': 'Conoce nuestros servicios',
            'breed': 'primary',
            'link': '/servicios',
          },
        },
      },
      {
        'type': 'quote',
        'value' : {
          'quote': 'Reina en mi espíritu una alegría admirable, muy parecida a las dulces alboradas de la primavera, de que gozo aquí con delicia.',
          'author': 'Mabel Pines',
          'workplace': 'Mystery Shack Ceo',
        },
      },
      {
        'type': 'companies',
        'value': {
          'title': 'Nuestros clientes',
          'companies': [
            {
              'name': 'google',
              'link': 'google.com',
              'image': './assets/google-logo.svg',
            },
            {
              'name': 'google',
              'link': 'google.com',
              'image': './assets/google-logo.svg',
            },
            {
              'name': 'google',
              'link': 'google.com',
              'image': './assets/google-logo.svg',
            },
            {
              'name': 'google',
              'link': 'google.com',
              'image': './assets/google-logo.svg',
            },
            {
              'name': 'google',
              'link': 'google.com',
              'image': './assets/google-logo.svg',
            },
            {
              'name': 'google',
              'link': 'google.com',
              'image': './assets/google-logo.svg',
            },
          ],
        },
      },
    ],
  },
};

export default function(state = initialState, action = {}) {
  switch (action.type){
    case HOME_FETCH:
      return {
        ...state,
      };
    case HOME_FETCH_CANCEL:
      return {
        ...state,
      };
    case HOME_FETCH_FAILED:
      return {
        ...state,
      };
    case HOME_FETCH_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
