<template>
<div class="chip" v-on:click="toggle()" :class="{active: isActive, winning: isWinning}">
</div>
<div v-if="isWinning" class="winning-amount">+ {{winningAmount}}</div>
</template>

<script>

export default {
  props: {
    type: null,
  },
  computed: {
    isActive () {
      return this.$store.state.bets.includes(this.type);
    },
    isWinning () {
      return this.$store.state.winningBets.find(x => x.type == this.type) != null;
    },
    winningAmount () {
      return this.$store.state.winningBets.find(x => x.type == this.type).winningAmount;
    }
  },
  methods: {
    toggle () {
      if (this.isActive) {
        this.$store.dispatch('removeBet', this.type);
      } else {
        this.$store.dispatch('addBet', this.type);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.chip {
  width: 45px;
  height: 45px;
  background-color: gray;
  border: 3px black dashed;
  opacity: 0.2;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &.active {
    opacity: 1;
    background-color: transparent;
    border-color: white;
  }

  &.winning {
    opacity: 1;
    background-color: transparent;
    border-color: lime;
  }
}

.winning-amount {
  position: absolute;
    top: 0;
    right: 0;
    left: 40px;
    border-radius: 50%;
    background-color: ghostwhite;
    width: 30px;
    height: 30px;
    margin: auto;
    font-size: 13px;
    color: black;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 40px;
}
</style>