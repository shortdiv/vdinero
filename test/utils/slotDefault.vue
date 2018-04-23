<template>
  <v-dinero :value="$props.value">
    <div slot-scope="{ formattedValue }">
      {{ formattedValue }}
    </div>
  </v-dinero>
</template>

<script>
  import VDinero from '../../src/components/VDinero'

  export default {
    props: ['value'],
    components: {
      'v-dinero': VDinero
    },
  }
</script>
