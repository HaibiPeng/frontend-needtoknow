<template>
  <div id="app">
    <div class="container">
      <AddTodos />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Todos from "./components/Todos.vue";
import AddTodos from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos.vue";

@Component({
  components: {
    Todos,
    AddTodos,
    FilterTodos,
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
