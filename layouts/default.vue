<template>
  <div>
    <my-header/>

    <nuxt/>

    <my-footer/>
  </div>
</template>

<script>
  import MyHeader from "../components/MyHeader";
  import MyFooter from "../components/MyFooter";

  export default {
    components: {MyFooter, MyHeader}
  }
</script>
<style>
</style>
