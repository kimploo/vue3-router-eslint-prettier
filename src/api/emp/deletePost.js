import axios from "@/api/axios";

export default async function deletePostById(id) {
  try {
    return await axios.delete(`/emp/${id}`);
  } catch (e) {
    console.error("delete post error: ", e);
  }
}
