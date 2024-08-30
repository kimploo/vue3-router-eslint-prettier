import { defineStore } from "pinia";

// state, actions, getters
export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
  }),
  actions: {
    // 전역 자원에 접근해서 사용하는 함수 등록
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
  getters: {
    getCount: (state) => state.count,
  },
});
