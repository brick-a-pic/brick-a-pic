import { shallowMount } from '@vue/test-utils';
import Settings from '@/components/Settings.vue';
import OpenImage from '@/components/OpenImage.vue';

describe('Settings.vue', () => {
    const wrapper = shallowMount(Settings);

    it('contains an OpenImage child component', () => {
        expect(wrapper.find(OpenImage).exists()).toBe(true);
    });
});