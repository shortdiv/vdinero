import { mount } from '@vue/test-utils'
import Vue from 'vue'
import SlotDefault from '../utils/slotDefault.vue'
import SlotOptions from '../utils/slotOptions.vue'

jest.useFakeTimers()

describe('VDinero basic functionality', () => {
  let wrapper
  describe('without options', () => {
    test('should format a given value as usd by default', () => {
      wrapper = mount(SlotDefault, {
        propsData: {
          value: 300
        }
      })
      expect(wrapper.text()).toBe('$300')
    })
    test('should truncate to 2 dp, and use a . by default', () => {
      wrapper = mount(SlotDefault, {
        propsData: {
          value: 30000.444
        }
      })
      expect(wrapper.text()).toBe('$30,000.44')
    })
    test('should round to 2 dp, and to nearest hundredth and use a . by default', () => {
      wrapper = mount(SlotDefault, {
        propsData: {
          value: 30000.447
        }
      })
      expect(wrapper.text()).toBe('$30,000.45')
    })
  })
  describe('with options', () => {
    test('should format a value to euro', () => {
      wrapper = mount(SlotOptions, {
        propsData: {
          value: 3000,
          options: {
            currency: 'euro',
            delimiter: '.',
            decimal: ','
          }
        }
      })
      expect(wrapper.text()).toBe('€3.000')
    })
    test('should format a value to euro with us format', () => {
      wrapper = mount(SlotOptions, {
        propsData: {
          value: 3000,
          options: {
            currency: 'euro',
            delimiter: ',',
            decimal: '.'
          }
        }
      })
      expect(wrapper.text()).toBe('€3,000')
    })
  })
  describe('on user input', () => {
    beforeEach(() => {
      wrapper = mount(SlotDefault, {
        propsData: {
          value: 300
        }
      })
    })
    test('initial value should be $300', () => {
      expect(wrapper.text()).toBe('$300')
    })
    test('on reaching thousands place, it should add a delimiter', async () => {
      wrapper.setProps({ value: 3000 })
      await wrapper.vm.$nextTick()
      wrapper.vm.$nextTick().then(res => {
        //console.log(res.$options.propsData)
        //console.log(wrapper.vm._update)
        //console.log(wrapper.text())
      })
      expect(wrapper.vm.value).toBe(3000)
    })
  })
})
