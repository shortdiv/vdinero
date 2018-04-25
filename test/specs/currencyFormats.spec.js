import { mount } from '@vue/test-utils'
import SlotOptions from '../utils/slotOptions.vue'

describe('Currency formatter', () => {
  test('should format according to indian currency', () => {
    const wrapper = mount(SlotOptions, {
      propsData: {
        value: 100000,
        options: {
          currency: 'rupee',
          prefix: 'true'
        }
      }
    })
    expect(wrapper.text()).toBe('₹1,00,000')
  })
  test('should format according to chinese currency', () => {
    const wrapper = mount(SlotOptions, {
      propsData: {
        value: 100000,
        options: {
          currency: 'yuan',
          prefix: true
        }
      }
    })
    expect(wrapper.text()).toBe('¥100,000')
  })
  test('should format according to european currency', () => {
    const wrapper = mount(SlotOptions, {
      propsData: {
        value: 100000,
        options: {
          currency: 'euro',
          prefix: true
        }
      }
    })
    expect(wrapper.text()).toBe('€100,000')
  })
  test('should format according to american currency', () => {
    const wrapper = mount(SlotOptions, {
      propsData: {
        value: 100000,
        options: {
          currency: 'usd',
          prefix: true
        }
      }
    })
    expect(wrapper.text()).toBe('$100,000')
  })
})
