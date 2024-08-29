<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <main>
    <Header></Header>
    <section class="main">
      <router-view />
    </section>
    <Footer></Footer>
  </main>
</template>

<style>
nav {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #6482ad;
}

nav a {
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #7fa1c3;
  color: #f5eded;
}

main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

section.main {
  display: flex;
  justify-content: center;
  flex: 1 0 0;
}
</style>
