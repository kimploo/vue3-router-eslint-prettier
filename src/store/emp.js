import createPost from "@/api/emp/createPost";
import deletePostById from "@/api/emp/deletePost";
import getPosts from "@/api/emp/getPosts";
import updatePost from "@/api/emp/updatePost";
import { defineStore } from "pinia";

// state, actions, getters
export const useEmpStore = defineStore("emp", {
  state: () => ({
    empList: [],
  }),
  actions: {
    async getAllEmps() {
      try {
        const newEmpList = await getPosts();
        this.empList = newEmpList;
      } catch (e) {
        console.error(e);
      }
    },
    async createEmp(emp) {
      try {
        const newEmp = await createPost(emp);
        this.empList.push(newEmp);
      } catch (e) {
        console.error(e);
      }
    },
    async updateEmp(id, emp) {
      try {
        await updatePost(id, emp);
        const idx = this.empList.findIndex((e) => e === emp.empId);
        const newEmpList = this.empList.slice();
        newEmpList.splice(idx, 1, this.emp);
        this.empList = newEmpList;
      } catch (e) {
        console.error(e);
      }
    },
    async deleteEmp(id) {
      try {
        await deletePostById(id);
        const idx = this.empList.findIndex((e) => e === id);
        this.empList.splice(idx, 1);
      } catch (e) {
        console.error(e);
      }
    },
  },
});
