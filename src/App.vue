<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/contact">contact</router-link>
    <router-link to="/service">service</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
