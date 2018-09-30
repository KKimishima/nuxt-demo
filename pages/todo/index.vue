<template>
  <div>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.test">
        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input placeholder="やること入力してEnterを押してください" @keyup.enter="addTodo"></li>
      {{todos}}
    </ul>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    computed: {
      todos () {
        // console.log(this.$store.state.todos)
        return this.$store.state.todos.list }
    },
    methods: {
      addTodo (e) {
        this.$store.commit('todos/add', e.target.value)
        e.target.value = ''
      },
      ...mapMutations({
        toggle: 'todos/toggle'
      })
    }
  }
</script>

<style scoped>

</style>
