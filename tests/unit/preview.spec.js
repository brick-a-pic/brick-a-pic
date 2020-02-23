import { shallowMount } from '@vue/test-utils';
import Preview from '@/components/Preview.vue';
import ImageProcessor from '@/components/Preview.vue';

describe('Preview.vue', () => {
    const wrapper = shallowMount(Preview);

    it('renders an SVG element', () => {
        expect(wrapper.contains('svg')).toBe(true);
    });

    it('contains an ImageProcessor child component', () => {
        expect(wrapper.find(ImageProcessor).exists()).toBe(true);
    });
});