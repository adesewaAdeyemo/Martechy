import { createApp } from "vue";

import App from "./App.vue";
import "./style.css";
import AxiosPlugin from "./plugins/axios";
import router from "./router.js";
import registerGlobalComponents from "./plugins/globalComponents";


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

app.use(router);
app.use(AxiosPlugin);

registerGlobalComponents(app);

app.mount("#app");
