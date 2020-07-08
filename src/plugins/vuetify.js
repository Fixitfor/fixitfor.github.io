import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import {primary} from './themes'

Vue.use(Vuetify);
let vuetify  = new Vuetify({
  theme: { dark: false, themes: {light:primary, dark: primary}, variations: false },
  // theme: { dark: false, options: {variations: false}},
});
export default vuetify
