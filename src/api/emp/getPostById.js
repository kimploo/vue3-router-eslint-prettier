import axios from "@/api/axios";

export default async function getPostById(id) {
  try {
    return (await axios.get(`emp/${id}`)).data;
  } catch (e) {
    console.error("get post by id error: ", e);
  }
}
