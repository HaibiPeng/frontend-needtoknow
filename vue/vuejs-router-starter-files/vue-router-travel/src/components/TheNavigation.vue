<template>
  <nav id="nav">
    <p class="logo">The Vue School Travel app</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/"> Home </router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.name"
        class="links"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          {{ destination.name }}
        </router-link>
      </li>
      <li class="links">
        <router-link to="/user">Dashboard</router-link>
      </li>
    </ul>
    <GoBack />
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";
import GoBack from "@/components/GoBack.vue";

@Component({
  components: {
    GoBack: GoBack,
  },
  data() {
    return {
      destinations: store.destinations,
    };
  },
})
export default class TheNavigation extends Vue {}
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid grey;
  z-index: 1;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

/* vue-router-class为在index.ts中修改过的Active Class */
#nav a.vue-router-class {
  color: #ab26ab;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>
