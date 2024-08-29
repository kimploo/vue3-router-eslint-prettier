<script setup>
import getPostById from "@/api/emp/getPostById";
import updatePost from "@/api/emp/updatePost";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const empName = ref("");
const empPosition = ref("");
const empSalary = ref(0);

onMounted(async () => {
  try {
    const emp = await getPostById(route.params.id);
    console.log(emp);
    empName.value = emp.name;
    empPosition.value = emp.position;
  } catch (e) {
    console.error("get user error", e);
  }
});

const postEmp = async (id) => {
  console.log(id);
  try {
    await updatePost(id, {
      name: empName.value,
      position: empPosition.value,
      salary: empSalary.value,
    });
    router.push(`/`);
  } catch (e) {
    console.error("update error", e);
  }
};
</script>

<template>
  <div>{{ "Welcome User: " + route.params.id }}</div>
  <form @submit.prevent="postEmp(route.params.id)">
    <input type="text" v-model="empName" />
    <input type="text" v-model="empPosition" />
    <input type="number" step="1000" v-model="empSalary" />
    <button type="submit">등록</button>
  </form>
</template>

<style scoped></style>
