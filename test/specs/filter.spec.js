import { mount } from '@vue/test-utils'
import Vue from 'vue';
import Dinero from '../../src/dinerofy';

describe('Filter logic', () => {
  it('should return value in usd as default', () => {
    const wrapper = mount({
      data () {
        return {
          monies: 300
        }
      },
      filters: {
        dinero: Dinero
      },
      template: `
        <p>{{ monies | dinero }}</p>
      `
    })
    expect(wrapper.element.textContent).toBe('$300')
  })
  it('should return value in user defined format', () => {
    const wrapper = mount({
      data () {
        return {
          monies: 3000,
          format: {
            currency: 'euro',
            delimiter: '.',
            decimal: ','
          }
        }
      },
      filters: {
        dinero: Dinero
      },
      template: `
        <p>{{ monies | dinero(format) }}</p>
      `
    })
    expect(wrapper.element.textContent).toBe('€3.000')
  })
})
