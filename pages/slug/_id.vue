<template>
  <h1>動的ルーティング</h1>
</template>

<script>
  export default {
    validate ({ params }) {
      return /^\d+$/.test(params.id)
    }
  }
</script>

<style scoped>

</style>
