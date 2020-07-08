import Vue from 'vue'
import Vuetify from 'vuetify'
Vue.use(Vuetify);

import HelloWorld from '@/components/HelloWorld'

import {
  mount,
  createLocalVue
} from '@vue/test-utils'

const localVue = createLocalVue();

describe('HelloWorld.vue', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify()
  });

  it('should match snapshot', () => {
    const wrapper = mount(HelloWorld, {
      localVue,
      vuetify,
    });
    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot()
  })
});