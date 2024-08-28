<script setup>
import { ref, onMounted } from "vue";
import axios from "@/api/axios";
const post = ref([]);
const newPostTitle = ref("");

// UPDATE TEST
const updatePostId = ref("");
const updatePostTitle = ref("");

onMounted(async () => {
  try {
    const postRes = await axios.get("posts");
    console.log(postRes);
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

const createPost = async () => {
  try {
    const res = await axios.post("/posts", {
      title: newPostTitle.value,
      body: "this is new post",
      userId: 1,
    });
    console.log(res);
    post.value.push(res.data);
  } catch (e) {
    console.error("Create post", e);
  }
};

const updatePost = async () => {
  try {
    // const idx = post.value.find(post => post.)
    const res = await axios.put(`/posts/${updatePostId.value}`, {
      title: updatePostTitle.value,
      body: "this is updated post",
      userId: 1,
    });
    const idx = post.value.findIndex((post) => post.id === res.data.id);

    post.value = [
      ...post.value.slice(0, idx),
      res.data,
      ...post.value.slice(idx + 1),
    ];
  } catch (e) {
    console.error("Error deleting post", e);
  }
};

const deletePost = async (id) => {
  try {
    axios.post(`/posts/${id}`, {});
    post.value = post.value.filter((post) => post.id !== id);
    // post.value.splice(0, 1) 0번째 index 하나 삭제
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
    <div>
      <h3>update post</h3>
      <input type="text" placeholder="post ID" v-model="updatePostId" />
      <input type="text" placeholder="post title" v-model="updatePostTitle" />
      <button @click="updatePost">Update Post</button>
    </div>
    <ul>
      <li v-for="(p, i) in post" :key="i">
        <span>{{ p.title }}</span>
        <button @click="deletePost(post.id)">delete</button>
      </li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
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

section {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  max-width: 768px;
}
</style>
