<template>
  <div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
    <div v-transfer-dom>
      <confirm v-model="show"
               title="Confirm deleting the item">
        <p style="text-align:center;">Are you sure?</p>
      </confirm>
    </div>
  </div>
</template>

<script>
import { Group, Cell, Confirm, TransferDomDirective as TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    Group,
    Cell,
    Confirm
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      show: true
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
