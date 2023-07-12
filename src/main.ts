import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import router from "./config/routes";
import 'vant/lib/index.css';

const app = createApp(App)
app.use(Vant)
app.use(router)
app.mount('#app')

