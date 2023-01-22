import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#0084F4',
          secondary: '#40B4FD',
          muted: '#AAAAAA',
          success: '#00C48C',
          danger: '#FF647C',
          lightDanger: '#FBE4E8',
          lightPrimary: '#F5FAFF',
          border: '#EEEEEE',
          blue: '#4046FD',
          lightBlue: '#EBF5FF',
          black: '#000000',
          blackSecondary: '#383838',
          gray: '#F3F3F7',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      variant: 'flat',
    },
    VTextField: {
      variant: 'outlined',
      density: 'compact',
      hideDetails: 'auto',
    },
    VSelect: {
      variant: 'outlined',
      density: 'compact',
      hideDetails: 'auto',
    },
  },
});

export default vuetify;
