<script setup>
import getPostById from "@/api/emp/getPostById";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const info = ref(null);

onMounted(async () => {
  try {
    const emp = await getPostById(route.params.id);
    // console.log(emp);
    info.value = emp;
  } catch (e) {
    console.error("get user error", e);
  }
});
</script>

<template>
  <section>
    <div class="profile-title">
      <h2>{{ "직원 " + route.params.id + " 정보" }}</h2>
    </div>
    <div class="profile-wrapper">
      <div class="profile-item">
        <span>ID</span>
        <span>{{ info?.empId }}</span>
      </div>
      <div class="profile-item">
        <span>이름</span>
        <span>{{ info?.name }}</span>
      </div>
      <div class="profile-item">
        <span>직위</span>
        <span>{{ info?.position }}</span>
      </div>
      <div class="profile-item">
        <span>급여</span>
        <span>{{ info?.salary }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 768px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

div.profile-title {
  text-align: center;
}

div.profile-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

div.profile-item {
  display: flex;
  gap: 1rem;
}

div.profile-item span:first-child {
  font-weight: 700;
  flex: 0 0 4rem;
}
</style>
