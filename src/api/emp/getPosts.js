import axios from "@/api/axios";

export default async function getPosts() {
  try {
    return await axios.get("emp");
  } catch (e) {
    console.error("get posts error: ", e);
  }
}
