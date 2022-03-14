import { createApp, h } from "vue";

import router from './routes';

import App from "./App";

window.Vue = require("vue");

//const app = Vue.createApp(App);

//app.use(router)

createApp(App).use(router).mount("#app");
