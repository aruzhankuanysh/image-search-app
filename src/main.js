import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Unicon from 'vue-unicons'
import { uniImport, uniHeartAlt, uniSearch, uniArrowUp } from 'vue-unicons/dist/icons'

Unicon.add([uniImport, uniHeartAlt, uniSearch, uniArrowUp])

createApp(App).use(store).use(router).use(Unicon).mount("#app");
