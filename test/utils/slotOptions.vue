<template>
  <v-dinero :value="$props.value" :options="$props.options">
    <div slot-scope="{ formattedValue }">
      {{ formattedValue }}
    </div>
  </v-dinero>
</template>

<script>
  import VDinero from '../../src/components/VDinero'

  export default {
    props: ['value', 'options'],
    components: {
      'v-dinero': VDinero
    },
  }
</script>
