<script setup>
import { ref, onMounted } from "vue";
import getPosts from "@/api/emp/getPosts";
import { useRouter } from "vue-router";
import deletePostById from "@/api/emp/deletePost";
const router = useRouter();
const post = ref([]);
const newPostTitle = ref("");

onMounted(async () => {
  try {
    const postRes = await getPosts();
    // console.log(postRes);
    post.value = postRes.data;
  } catch (e) {
    console.log(e);
  }
});

const updatePost = async (id) => {
  router.push(`/edit/${id}`);
};

const deletePost = async (id) => {
  try {
    await deletePostById(id);
    const postRes = await getPosts();
    post.value = postRes.data;
  } catch (e) {
    console.error("Error deleting post", e);
  }
};
</script>

<template>
  <section>
    <div>
      <h3>create post</h3>
      <input
        v-model="newPostTitle"
        type="text"
        placeholder="Enter post title"
      />
      <button @click="createPost">post</button>
    </div>
    <ul>
      <li>
        <div class="emp-info">
          <span class="emp-header-id">id</span>
          <span class="emp-header-name">이름</span>
          <span class="emp-header-position">직위</span>
          <span class="emp-header-salary">급여</span>
        </div>
        <div class="emp-buttons">
          <!-- <button>Update Post</button> -->
          <!-- <button>delete</button> -->
        </div>
      </li>
      <li v-for="(p, i) in post" :key="i">
        <div class="emp-info">
          <span class="emp-item-id">{{ p.empId }}</span>
          <span class="emp-item-name">{{ p.name }}</span>
          <span class="emp-item-position">{{ p.position }}</span>
          <span class="emp-item-salary">{{ p.salary }}</span>
        </div>
        <div class="emp-buttons">
          <button @click="updatePost(p.empId)">수정</button>
          <button @click="deletePost(p.empId)">삭제</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
section {
  width: 768px;
  padding: 2rem;
}

ul {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 0.5rem;
}

li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 2px 0;
}

li button {
  border: 0;
  background-color: white;
  border-radius: 6px;
  border: 1px dotted white;
  padding: 2px;
}

div.emp-info {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  flex-grow: 1;
}

div.emp-info > span {
  flex: 1 0 0;
}

div.emp-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  width: 150px;
}

section {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  max-width: 768px;
}
</style>
