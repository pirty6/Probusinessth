import {
  SERVICES_FECTH,
  SERVICES_FECTH_CANCEL,
  SERVICES_FECTH_FAILED,
  SERVICES_FECTH_SUCCESS,
} from '../../constants/actionTypes';

const initialState = {
  currentPage: {
    'title': 'services',
    'body': [
      {
        'type': 'header',
        'value': {
          'title': 'Esto es lo que hacemos',
          'subtitle': 'Servicios',
          'paragraph': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        },
      },
      {
        'type': 'sideImage',
        'value': {
          'title': 'Reclutamiento',
          'rectangle': true,
          'smaller_rectangle': false,
          'paragraph': 'Aplicamos entrevista inicial, profunda y por competencias, asi como pruebas psicometricas de comportamiento laboral, personalidad, estilo gerencial, honestidad, entre otras. Que ayudan a darle la certeza que en cada proceso los candidatos enviados son los idoneos para la vacante que necesita cubrir',
          'right_image':true,
          'background_color': '',
          'image': {
            'md': './assets/people600.jpg',
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
          'title': 'Estudios socioeconomicos',
          'rectangle': false,
          'smaller_rectangle': true,
          'paragraph': 'La investigacion socioeconomica ayuda a determinar si el candidato es confiable y viable para contratacion, de acuerdo a las referencias vecinales y en conjunto con toda la informacion que arroje el estudio',
          'right_image': false,
          'background_color': '',
          'image': {
            'md': './assets/book600.jpg',
          },
          'cta': {
            'text': '',
            'breed': 'primary',
            'link': '',
          },
        },
      },
      {
        'type': 'sideImage',
        'value': {
          'title': 'Administracion de nomina del talento humano',
          'rectangle': false,
          'smaller_rectangle': false,
          'paragraph': 'Aplicamos entrevista inicial, profunda y por competencias, asi como pruebas psicometricas de comportamiento laboral, personalidad, estilo gerencial, honestidad, entre otras. Que ayudan a darle la certeza que en cada proceso los candidatos enviados son los idoneos para la vacante que necesita cubrir',
          'right_image': true,
          'background_color': '#fbfbfb',
          'image': {
            'md': './assets/chairs600.jpg',
          },
          'cta': {
            'text': '',
            'breed': 'primary',
            'link': '',
          },
        },
      },
      {
        'type': 'columnText',
        'value': {
          'title': 'Servicios de valor',
          'text': [
            {
              'paragraph': 'Introduccion de los colaboradores (forma de pago, prestaciones, horarios y afines)',
              'icon': null,
            },
            {
              'paragraph': 'Entrega de credencial, seguro de vida en muerte natural o accidental, y tarjeta de descuentos medicos',
              'icon': null,
            },
            {
              'paragraph': 'Capacitacion trimestral (Seguridad e higiene, comunicacion efectiva, y trabajo en equipo)',
              'icon': null,
            },
          ],
          'background_color': '#fbfbfb',
        },
      },
      {
        'type': 'sideImage',
        'value': {
          'title': 'Capacitacion',
          'rectangle': true,
          'smaller_rectangle': false,
          'paragraph': 'Es una inversion que ayudara a los colaboradores a desarrollar y/o, mejorar sus competencias personales y habilidades tecnicas, logrando asi incrementar el desempeno laboral. El tener un talento capacitado es contar con el personal calificado y preparado para afrontar los cambios organizacionales',
          'right_image': false,
          'background_color': '',
          'image': {
            'md': './assets/computer600.jpg',
          },
          'cta': {
            'text': '',
            'breed': 'primary',
            'link': '',
          },
        },
      },
      {
        'type': 'columnText',
        'value': {
          'title': 'Servicios de valor',
          'text': [
            {
              'paragraph': 'Deteccion de necesidades de capacitacion',
              'icon': './assets/search.svg',
            },
            {
              'paragraph': 'Plan de capacitacion de acuerdo a las necesidades',
              'icon': './assets/edit.svg',
            },
            {
              'paragraph': 'Seguimiento posterior a la capacitacion',
              'icon': './assets/list.svg',
            },
          ],
          'background_color': '',
        },
      },
      {
        'type': 'sideImage',
        'value': {
          'title': 'Coaching directivo',
          'rectangle': false,
          'smaller_rectangle': true,
          'paragraph': 'Aplicamos entrevista inicial, profunda y por competencias, asi como pruebas psicometricas de comportamiento laboral. personalidad, estilo gerencial, honestidad, entre otras. Que ayudan a darle la certeza que en cada proceso los candidatos enviados son los idoneos para la vacante que necesita cubrir.',
          'right_image': true,
          'background_color': '',
          'image': {
            'md': './assets/paper600.jpg',
          },
          'cta': {
            'text': '',
            'breed': 'primary',
            'link': '',
          },
        },
      },
      {
        'type': 'button',
        'value': {
          'text': 'Contactanos',
          'breed': 'primary',
          'link': '/contacto',
        },
      },
    ],
  },
};

export default function(state = initialState, action = {}) {
  switch (action.type){
    case SERVICES_FECTH:
      return {
        ...state,
      };
    case SERVICES_FECTH_CANCEL:
      return {
        ...state,
      };
    case SERVICES_FECTH_FAILED:
      return {
        ...state,
      };
    case SERVICES_FECTH_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
