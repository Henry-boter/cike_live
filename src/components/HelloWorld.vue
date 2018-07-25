<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-commodity"></use>
    </svg>
  </div>
</template>

<script>
import { serverAddress } from '../api/config'
const axios = require('axios')

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    const url = serverAddress + '/api/cike/getUser'
    axios.get(url).then((res) => {
      console.log(res)
    })
  }
}
</script>
<style scoped>
</style>
