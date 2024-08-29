import axios from "@/api/axios";

/**
 * @argument id {number}
 * @argument body {number}
 */
export default async function updatePost(body) {
  try {
    return await axios.post("/emp", body);
  } catch (e) {
    console.error("update post error: ", e);
  }
}
