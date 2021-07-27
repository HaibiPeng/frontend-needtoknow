<template>
  <div>
    <h1>Welcome {{ user }}</h1>
    <p>
      <router-link
        :to="{
          name: 'invoices',
        }"
        >Invoices</router-link
      >
    </p>
    <button @click="logOut" class="btn">Log out</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";

@Component({
  data() {
    return {
      user: store.user,
    };
  },
  methods: {
    logOut() {
      store.user = null;
      this.$router.push("/");
    },
  },
})
export default class User extends Vue {}
</script>
