<template>
  <div>
    {{user.name}}
  </div>
</template>

<script>
  import axios from 'axios'
  export default {

    async asyncData ({params}) {
      const {data:user} = await axios.get(`/users/${params.id}`)
      return{
        user
      }
    }
  }
</script>

<style scoped>

</style>
