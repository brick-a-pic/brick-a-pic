import Vue from 'vue';
import {
  mount,
  createLocalVue,
} from '@vue/test-utils';
import Vuetify from 'vuetify';
import Settings from '@/components/Settings.vue';
import OpenImage from '@/components/OpenImage.vue';

const localVue = createLocalVue();
Vue.use(Vuetify);

describe('Settings.vue', () => {
  let vuetify;
  beforeEach(() => { vuetify = new Vuetify(); });

  const mountFunc = () => mount(Settings, {
    localVue,
    vuetify,
  });

  const wrapper = mountFunc({
  });

  it('contains an OpenImage child component', () => {
    expect(wrapper.find(OpenImage).exists()).toBe(true);
  });
});
