<template>
  <div>
    <h1>非同期テスト</h1>
    <ul v-for="list in lists" v-bind:key="list.id">
      <li>
        <nuxt-link v-bind:to="{name :'ajax-id',params : { id: list.id }}">
          {{list.name}}
        </nuxt-link>

      </li>
    </ul>
  </div>

</template>

<script>
  export default {

    created() {
      this.$store.dispatch("users/getList")
    },
    computed: {
      lists() {
        return this.$store.getters["users/showList"]
      }
    }
  }
</script>

<style scoped>

</style>
