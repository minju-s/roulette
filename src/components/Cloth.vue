<template>
<div class="cloth">
  <div class="side">
    <div class="group">
      <div>
        <div class="field">
          <div>1 - 18</div>
          <Chip :type="'1-18'"/>
        </div>
        <div class="field">
          <div>EVEN</div>
          <Chip :type="'even'"/>
        </div>
      </div>
      <div class="field">
        <div>1st 12</div>
        <Chip :type="'row-1'"/>
      </div>
    </div>
    <div class="group">
      <div>
        <div class="field">
          <div class="red">RED</div>
          <Chip :type="'red'"/>
        </div>
        <div class="field">
          <div class="black">BLACK</div>
          <Chip :type="'black'"/>
        </div>
      </div>
      <div class="field">
        <div>2nd 12</div>
        <Chip :type="'row-2'"/>
      </div>
    </div>
    <div class="group">
      <div>
        <div class="field">
          <div>ODD</div>
          <Chip :type="'odd'"/>
        </div>
        <div class="field">
          <div>19 - 36</div>
          <Chip :type="'19-36'"/>
        </div>
      </div>
      <div class="field">
        <div>3rd 12</div>
        <Chip :type="'row-3'"/>
      </div>
    </div>
  </div>
  <div class="main">
    <div class="field zero">
      <div>
        <Number :number="0"/>
        <Chip :type="0"/>
      </div>
    </div>
    <div v-for="field in singleFields" :key="field.number" class="field">
      <Number :number="field.number" :color="field.color"/>
        <Chip :type="field.number"/>
    </div>
    <div class="field">
      2 to 1
      <Chip :type="'col-1'"/>
    </div>
    <div class="field">
      2 to 1
      <Chip :type="'col-2'"/>
    </div>
    <div class="field">
      2 to 1
      <Chip :type="'col-3'"/>
    </div>
  </div>
</div>
</template>

<script>
import Number from './Number.vue';
import Chip from './Chip.vue';
import game from '../game';
export default {
  data: () => {
    return {
      singleFields: game.fieldMapping
    }
  },
  components: {
    Number,
    Chip,
  }
}
</script>

<style scoped lang="scss">

.cloth {
  display: flex;
}

.side {
  margin-top: 70px;
  margin-left: 20px;
  border-top: 1px solid;

  .group {
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    width: 160px;
    height: 212px;
    display: flex;

    > div:first-child {
      width: 50%;

      &:first-child {
        border-right: 1px solid;  
      }

      > div {
        height: 50%;

        &:first-child {
          border-bottom: 1px solid;
        }
      }
    }

    > div:last-child {
      flex-grow: 1;
    } 

    .field {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      position: relative;

      div {
        transform: rotate(90deg);
      }
    }

  }
}
.main {
  max-width: 420px;
  border-right: 1px solid;
  border-bottom: 1px solid;
  display: flex;
  flex-wrap: wrap;

  .field {
    width: 33.333333%;
    border-left: 1px solid;
    border-top: 1px solid;
    height: 53px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 22px;

    position: relative;

  }

  .zero {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;

    > div {
      width: 33.333333%;
    }
  }
}

</style>