import axios from "@/api/axios";

export default async function getPosts() {
  try {
    return (await axios.get("emp")).data;
  } catch (e) {
    console.error("get posts error: ", e);
  }
}
