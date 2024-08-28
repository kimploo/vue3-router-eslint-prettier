<script setup>
import { ref, onMounted } from "vue";
import axios from "@/api/axios";
const post = ref([]);

onMounted(async () => {
  try {
    const postRes = await axios.get("posts");
    post.value = postRes.data;
  } catch (e) {
    console.log(e);
  }
});

// onMounted(() => {
//   axios.get("posts").then((res) => {
//     post.value = res.data;
//   });
// });
</script>

<template>
  <ul>
    <li v-for="(p, i) in post" :key="i">{{ p.title }}</li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
}
</style>
