<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <div>{{ "Welcome User: " + route.params.id }}</div>
  <div></div>
</template>

<style scoped></style>
