<template>
  <auth/>
</template>

<script lang="ts">
import Vue from 'vue'
import Auth from './auth'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Auth
  }
})
</script>
