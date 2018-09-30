<template>
  <div>
    <b-container>
      <b-jumbotron header="nuxtの練習アプリを作成"
                   lead="nuxtが手に馴染むようにいじって回す">
        <p>知識がまだ薄いので参考にしないでください</p>
        <b-btn variant="primary">
          <nuxt-link class="text-light" to="/todo">
            todoデモツール
          </nuxt-link>
        </b-btn>
      </b-jumbotron>

    </b-container>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
