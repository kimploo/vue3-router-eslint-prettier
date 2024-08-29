import axios from "@/api/axios";

export default async function createPost({ name, position, salary }) {
  try {
    const res = await axios.post("/emp", {
      name,
      position,
      salary,
    });
    console.log(res);
  } catch (e) {
    console.error("create post error: ", e);
  }
}
