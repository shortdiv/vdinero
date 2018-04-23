import { currency } from './defaults.js'

/**
 * Converts currency and format options to actual symbols and delimiters
 *
 * @param {Object} options
 * @returns { Object } converted format options object
 */
function consolidateFormat (options) {
  var currencyFormat = currency[options.currency]
  currencyFormat['decimal'] = options.decimal ? options['decimal'] : currencyFormat['decimal']
  currencyFormat['delimiter'] = options.delimiter ? options['delimiter'] : currencyFormat['delimiter']
  return Object.assign(options, currencyFormat)
}

function format (num, options) {
  if (num.toString().indexOf("e") > -1) { num = truncateLargeNum(num) }
  const truncatedNum = truncateDecimalPlace(num, options.precision).toString()
  debugger
  const updateDecimalSymb = separateByDecimals(truncatedNum, options.decimal)
  const formattedNum = separateByThousandths(updateDecimalSymb, options.delimiter)
  if (options.prefix) {
    return options.currency + formattedNum
  } else {
    return formattedNum
  }
}

function truncateLargeNum (num) {
  return parseFloat(num.toString().split("e")[0]).toFixed(2)
}

function truncateDecimalPlace (decimal, precision) {
  return parseFloat(decimal.toFixed(precision))
}

function makeDecimal (decimal, precision) {
  let divident = Math.pow(10, decimal.length)
  let fraction = parseFloat(decimal) / divident
  return truncateDecimalPlace(fraction, precision)
}

function unformat (str, options) {
  var numParts = str.split(options.decimal)
  const integer = parseFloat(stripSymbols(numParts[0]))
  const decimals = numParts[1] ? makeDecimal(stripSymbols(numParts[1]), options.precision) : 0
  return integer + decimals
}

function stripSymbols (str) {
  return str.replace(/\D+/g, '')
}

function findDecimal (str, decimal) {
  return str.indexOf(decimal)
}

function separateByDecimals(num, decimal) {
  return num.toString().replace('.', decimal)
}

function separateByThousandths (str, delimiter) {
  debugger
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, `${delimiter}`)
}

function validateChars (evt, decimalSym) {
  var charCode = evt.which !== undefined ? evt.which : evt.keyCode
  validateNumChar(charCode)
  validateDecimalChar(charCode, decimalSym)
}

function validateNumChar (charCode) {
  if (charCode < 48 || charCode > 57) {
    return event.preventDefault();
  }
}

function validatePasteData (event) {
  if (Number.isNaN(parseFloat(event.clipboardData.getData('Text')))) { event.preventDefault() }
}

function validateDecimalChar (charCode, decimal) {
  if (decimal === ',' && charCode === 46) { event.preventDefault() }
  if (decimal === '.' && charCode === 44) { event.preventDefault() }
}

function limitDecimalPlaces (evt, options) {
  const decimalIndex = findDecimal(evt.target.value.slice(0, evt.target.selectionEnd), options.decimal)
  const decimalPlaces = evt.target.value.split(options.decimal)[1]
  if (decimalIndex > -1) {
    if ((evt.target.selectionEnd - decimalIndex) > options.precision || decimalPlaces.length > options.precision - 1) {
      evt.preventDefault();
    }
  }
}

export { format, unformat, validateChars, consolidateFormat, validatePasteData, limitDecimalPlaces }
