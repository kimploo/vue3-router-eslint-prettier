import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "./global.css";
import { createPinia } from "pinia";

const pinia = createPinia();
createApp(App).use(router).use(pinia).mount("#app");
