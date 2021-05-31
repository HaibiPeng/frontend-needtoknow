<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" class="input" />
      <label for="password">Password</label>
      <input v-model="password" type="password" class="input" />
      <button @click="login" class="btn">Login</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";
import { RawLocation } from "vue-router";

@Component({
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      store.user = (this as unknown as Record<string, unknown>).username;
      const redirectPath = this.$route.query.redirect || "/";
      //this.$router.push("/user");
      this.$router.push(redirectPath as RawLocation);
    },
  },
})
export default class Login extends Vue {}
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
</style>
