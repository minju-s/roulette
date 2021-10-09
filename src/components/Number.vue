<template>
<div :class="color">
  {{number}}
</div>
</template>

<script>
export default {
  props: {
    number: Number,
    color: String,
  }
}
</script>

<style scoped lang="scss">
div {
  font-size: 30px;
  font-weight: bold;
  border: 3px solid;
  border-radius: 50%;
  margin: 5px;
}
</style>