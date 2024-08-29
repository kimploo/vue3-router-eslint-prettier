import axios from "@/api/axios";

/**
 * @argument id {number}
 */
export default async function deletePostById(id) {
  try {
    return await axios.delete(`/emp/${id}`);
  } catch (e) {
    console.error("delete post error: ", e);
  }
}
