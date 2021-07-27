/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state: Record<string, unknown>) => state.todos,
};

const actions = {
  async fetchTodos({ commit }: { commit: any }): Promise<void> {
    const response = await axios.get(
      "https://jsonplaceholder.cypress.io/todos"
    );

    //通过commit方法更新视图，第一个参数是在mutation里定义的方法，第二个参数是数据源
    commit("setTodos", response.data);
  },

  async addTodo(
    { commit }: { commit: any },
    todo: Record<string, unknown>
  ): Promise<void> {
    const response = await axios.post(
      "https://jsonplaceholder.cypress.io/todos",
      //{ title, completed: false }
      { ...todo, completed: false }
    );

    console.log(response.data);

    commit("newTodo", response.data);
  },

  async deleteTodo({ commit }: { commit: any }, id: number): Promise<void> {
    await axios.delete(`https://jsonplaceholder.cypress.io/todos/${id}`);
    commit("removeTodo", id);
  },

  async filterTodos(
    { commit }: { commit: any },
    e: Record<string, any>
  ): Promise<void> {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `https://jsonplaceholder.cypress.io/todos?_limit=${limit}`
    );

    commit("setTodos", response.data);
  },

  async updateTodo(
    { commit }: { commit: any },
    updTodo: Record<string, unknown>
  ): Promise<void> {
    const response = await axios.put(
      `https://jsonplaceholder.cypress.io/todos/${updTodo.id}`,
      updTodo
    );

    console.log(response.data);

    commit("updateTodo", response.data);
  },
};

const mutations = {
  setTodos: (
    state: Record<string, unknown>,
    todos: Record<string, Array<any>>
  ) => (state.todos = todos),
  newTodo: (state: Record<string, any>, todo: Record<string, unknown>) =>
    state.todos.unshift(todo),
  removeTodo: (state: Record<string, any>, id: number) =>
    (state.todos = state.todos.filter(
      (todo: Record<string, unknown>) => todo.id !== id
    )),
  updateTodo: (
    state: Record<string, any>,
    updTodo: Record<string, unknown>
  ) => {
    const index = state.todos.findIndex(
      (todo: Record<string, unknown>) => todo.id === updTodo.id
    );
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
