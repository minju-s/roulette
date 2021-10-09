<template>
<div class="roulette">
  <Cloth/>
  <Wheel/>
</div>
</template>

<script>
import Cloth from './Cloth.vue';
import Wheel from './Wheel.vue';
export default {
  props: {
    msg: String
  },
  components: {
    Cloth,
    Wheel,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.roulette {
  display: flex;
}
</style>
