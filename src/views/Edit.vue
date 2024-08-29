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

const update = async (id) => {
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
  <section>
    <div class="edit-title">
      <h2>{{ "직원 " + route.params.id + " 정보 수정" }}</h2>
    </div>
    <form @submit.prevent="update(route.params.id)">
      <div>
        <label for="empName">이름</label>
        <input type="text" v-model="empName" id="empName" />
      </div>
      <div>
        <label for="empPosition">직위</label>
        <input type="text" v-model="empPosition" id="empPosition" />
      </div>
      <div>
        <label for="empSalary">급여</label>
        <input type="number" step="1000" v-model="empSalary" id="empSalary" />
      </div>
      <button type="submit">수정</button>
    </form>
  </section>
</template>

<style scoped>
section {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

div.edit-title {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

form > div {
  display: flex;
  gap: 0.5rem;
}

div.button-container {
  display: flex;
}

div.button-container button {
  margin: 1rem;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  border: 0;
  padding: 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
