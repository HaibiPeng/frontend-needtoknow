<template>
  <div class="app">
    <header>
      <h1>Hyrule Jobs</h1>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
      </div>
    </header>
    <JobList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Job from "./typings/Job";
import OrderTerm from "./typings/OrderTerm";
import JobList from "./components/JobList.vue";

export default defineComponent({
  name: "app",
  components: {
    JobList,
  },
  setup() {
    //reactive function
    /* const state = reactive({
      name: "Link",
      age: 25 as string | number,
    });
    state.name = "sha";
    return { ...toRefs(state) }; */

    //refs
    /* const name = ref("Link");
    const age = ref<number | string>(25);

    return { name, age }; */

    const jobs = ref<Job[]>([
      {
        title: "farm worker",
        location: "lon lon ranch",
        salary: 30000,
        id: "1",
      },
      {
        title: "quarryman",
        location: "death mountain",
        salary: 40000,
        id: "2",
      },
      {
        title: "flute player",
        location: "the lost woods",
        salary: 35000,
        id: "3",
      },
      { title: "fisherman", location: "lake hylia", salary: 21000, id: "4" },
      {
        title: "prison guard",
        location: "gerudo valley",
        salary: 32000,
        id: "5",
      },
    ]);

    const order = ref<OrderTerm>("title");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return { jobs, order, handleClick };
  },
});
</script>

<style>
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
