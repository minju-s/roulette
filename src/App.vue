<template>
<Roulette msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Roulette from './components/Roulette.vue'

export default {
  name: 'App',
  components: {
    Roulette
  }
}
</script>

<style lang="scss">
*, *:before, *:after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
  text-align: center;
  background-color: darkgreen;
  color: white;
}
.red {
  color: red;
}
.black {
  color: black;
}
</style>
