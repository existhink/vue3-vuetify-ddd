// Libraries
import Vuetify from 'vuetify';

import { describe, it, expect, beforeEach } from 'vitest';

// Utilities
import { mount } from '@vue/test-utils';

// Component
import AppBaseCard from '@/modules/app/ui/components/base/AppBaseCard.vue';

describe('AppBaseCard @/modules/app/ui/components/base/AppBaseCard.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(AppBaseCard, {
      global: {
        plugins: [Vuetify],
      },
    });
  });

  it('It should be contain v-card component', () => {
    expect(wrapper.find('v-card').exists()).toBe(true);
  });
});
