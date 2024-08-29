import axios from "@/api/axios";

/**
 * @argument title {string}
 * @argument body {string}
 * @argument userId {number}
 */
export default async function createPost({ title, body, userId }) {
  try {
    const res = await axios.post("/emp", {
      title,
      body,
      userId,
    });
    console.log(res);
  } catch (e) {
    console.error("create post error: ", e);
  }
}
