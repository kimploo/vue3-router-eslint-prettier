import axios from "@/api/axios";

export default async function createPost({ name, position, salary }) {
  try {
    await axios.post("/emp", {
      name,
      position,
      salary,
    });
  } catch (e) {
    console.error("create post error: ", e);
  }
}
