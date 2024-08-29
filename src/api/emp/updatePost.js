import axios from "@/api/axios";

export default async function updatePost(id, body) {
  try {
    return await axios.put(`/emp/${id}`, body);
  } catch (e) {
    console.error("update post error: ", e);
  }
}
