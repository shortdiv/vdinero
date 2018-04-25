# V-Dinero

> A component to enable masking for currency in an input component

## Installation 
npm install --save v-dinero
# or
yarn add v-dinero

## Usage
V-Dinero is available as both a component and a filter.

### Component Usage

```JS
import VDinero from 'v-dinero'
Vue.component('VDinero', VDinero)
```

The VDinero component is a renderless component, meaning that the component does not itself offer any content, it is merely a wrapper that offers logic for masking currencies.

```JS
<template>
  <v-dinero :v-model="monies">
    <div slot-scope="{ formattedValue, input }">
    <input type="text" :value="formattedValue"   @input="input">
  </v-dinero>
</template>

export default {
  name: 'example-currency',
  data () {
    return {
      monies: 300
    }
  }
}
```

### Filter Usage

#### Import in `main.js`
```JS
import VDinero from 'v-dinero'
Vue.use(VDinero, { options })
```

#### In Vue Instance
```JS
<template>
  {{ monies | dinerofy(options) }}
</template>

<script>
export default {
  name: 'filter-example',
  data () {
    return {
      monies: 300,
      options: {
        ...
      }
    }
  }
}
</script>
```

## API Reference
### Component

#### Props
| Name | Description | Type |
| --- | --- | --- |
| `value` | Intial value to be formatted | `Number` |
| `options` | Configuration options | `Object` |

### Configuration Options
| Name | Description | Type |
| --- | --- | --- |
| `currency` | Type of currency | `String` |
| `delimiter` | Symbol to denote thousands separator | `String` |
| `decimal` | Symbol to denote decimal placement | `String` |
| `precision` | Decimal precision | `Number` |
| `prefix` | Prepend currency to formatted value | `Boolean` |
| `suffix` | Append currency to formatted value | `Boolean` |


## Build Setup

``` bash
# install dependencies
npm install

# To run tests:
npm run test

# To see an example of VDinero in an app check /examples folder

npm i
npm run dev
```
