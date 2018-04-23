import { consolidateFormat, format } from '../utils.js'

export default function (val, options) {
  var formatOptions = Object.assign({
    currency: 'usd',
    delimiter: ',',
    decimal: '.',
    precision: 2,
    prefix: true,
  }, options)
  var options = consolidateFormat(formatOptions)
  return format(val, options)
}
