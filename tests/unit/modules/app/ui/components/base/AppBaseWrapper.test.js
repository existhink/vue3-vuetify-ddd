import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AppBaseWrapper from '@/modules/app/ui/components/base/AppBaseWrapper.vue';

describe('AppBaseWrapper @/modules/app/ui/components/AppBaseWrapper.vue', () => {
  test('It should be contain RouterView Component', () => {
    // TODO
    const wrapper = mount(AppBaseWrapper);
    expect(wrapper.find('routerview').exists()).toBe(true);
  });
});
