<template>
  <v-dinero v-model="$props.value">
    <div slot-scope="{ formattedValue, input }">
      <input @input="input">
      {{ formattedValue }}
    </div>
  </v-dinero>
</template>

<script>
  import VDinero from '../../src/components/VDinero'

  export default {
    props: ['value', ],
    components: {
      'v-dinero': VDinero
    },
  }
</script>
