<template>
<div class="wheel">
  <div class="result">{{result}}</div>
  <button v-on:click="spin()">Spin</button>
  <div>{{balance}} chip{{balance != 1 ? 's' : ''}}</div>
  <button v-on:click="collect()">Collect</button>
  <div>
    <button v-on:click="betAll()">Bet all</button>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    result: state => state.result,
    balance: state => state.balance,
  }),
  methods: {
    ...mapActions([
      'spin',
      'collect',
      'betAll'
    ]),
  }
}
</script>

<style scoped lang="scss">
  .wheel {
    div, button {
      font-size: 24px;
    }
    .result {
      font-size: 30px;
    }
  }
</style>