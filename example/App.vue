<template>
    <div class="money-wrapper">
    <v-dinero v-model="monies" :options="options">
      <div class="formatted-currency" slot-scope="{ formattedValue, input, inputEvents }">
        <input type="tel" :value="formattedValue" @input="input" v-on="inputEvents" />
        <span>€</span>
      </div>
    </v-dinero>
    </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      monies: 30000.987,
      options: {
        delimiter: '.',
        decimal: ',',
        prefix: false,
        precision: 2,
      },
      num: null,
    };
  },
  methods: {
    emitRaw(val) {
      this.num = val;
    },
  },
};
</script>

<style lang="scss">
.money-wrapper {
  display: flex;
  justify-content: center;
}
.formatted-currency {
  width: 150px;
  position: relative;
  padding-left: 40px;
}

input {
  border: 1px solid #d5d8dc;
  border-radius: 0 3px 3px 0;
  width: 100%;
  height: 2.6em;
  display: block;
  padding: 0.5em;
  &:focus {
    outline: none;
  }
}

span {
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 40px;
  text-align: center;
  line-height: 40px;
  width: 40px;
  color: #61b83a;
  border: 1px solid #d5d8dc;
  border-radius: 3px 0 0 3px;
  border-right: none;
  font-size: 14px;
}
</style>
