import { createApp } from 'vue'
import App from './App.vue'
import VueWriter from "vue-writer"
import './index.css'
import router from './router'

const app = createApp(App).use(router)
app.use(VueWriter)
app.mount('#app')