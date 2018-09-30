<template>
  <div>
    <p>カウント回数{{counter}}</p>
    <button v-on:click="increment">ボタン</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {

    name: "index",
    computed: {
      counter() {
        return this.$store.state.counter
      }
    },
    methods: {
      increment() {
        this.$store.commit("increment")
      }
    }
  }
</script>

<style scoped>

</style>
