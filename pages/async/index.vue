<template>
  <h1 class="red">Hello {{ name }}!</h1>

</template>

<script>
  export default {
    asyncData(context) {
      // コンポーネントをロードする前に毎回呼び出されます
      return {name: 'World'}
    },
  }
</script>

<style scoped>
  .red {
    color: red;
  }
</style>
