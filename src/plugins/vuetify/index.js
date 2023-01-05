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
          lightPrimary: '#F5FAFF',
          border: '#EEEEEE',
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
