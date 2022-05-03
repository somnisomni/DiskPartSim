import { createApp } from "vue";

import router from "@/plugins/router";
import store from "@/plugins/store";
import "@/registerServiceWorker";

import App from "@/App.vue";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
