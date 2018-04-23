import {
  format,
  unformat,
  validateChars,
  consolidateFormat,
  validatePasteData,
  limitDecimalPlaces
} from '../utils.js'

export default {
  name: 'v-dinero',
  props: ['value', 'options'],
  data () {
    return {
      formatted: '',
      formatOptions: {
        currency: 'usd',
        delimiter: ',',
        decimal: '.',
        precision: 2,
        prefix: true,
        ...this.options
      },
    }
  },
  methods: {
    formatNumber(e) {
      const rawValue = unformat(e.target.value, this.formatOptions)
      this.$emit('input', rawValue)
      return Number.isNaN(rawValue) ? '' : format(rawValue, this.formatOptions)
    },
  },
  created () {
    this.formatOptions = consolidateFormat(this.formatOptions)
    this.formatted = format(this.value, this.formatOptions)
  },
  render (h) {
    return this.$scopedSlots.default({
      formattedValue: this.formatted,
      input: (e) => {
        this.formatted = this.formatNumber(e)
      },
      inputEvents: {
          keypress: (e) => {
            validateChars(e, this.formatOptions.decimal)
            limitDecimalPlaces(e, this.formatOptions)
          },
          paste: (e) => validatePasteData(e)
      },
    })
  }
}
