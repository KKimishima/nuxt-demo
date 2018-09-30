<template>
  <header>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <nuxt-link class="text-light" to="/">My_Nuxt_Demo_App</nuxt-link>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link class="text-light" to="/todo">todo_demo</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link class="text-light" to="/about">about</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link class="text-light" to="/slug/1">動的ルーティング</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link class="text-light" to="/async">asyncDataDemo</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link class="text-light" to="/store">storeDemo</nuxt-link>
          </b-nav-item>
          <b-nav-item>
            <nuxt-link class="text-light" to="/ajax">非同期練習</nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
  export default {
    name: "MyHeader"
  }
</script>

<style scoped>

</style>
