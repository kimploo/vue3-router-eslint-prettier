import axios from "@/api/axios";

export default async function getPosts() {
  try {
    return await axios.get("emp");
    // console.log(postRes);
  } catch (e) {
    console.error("get posts error: ", e);
  }
}
