import {createApp} from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'

axios.defaults.withCredentials = true // 跨域携带cookie

createApp(App).use(router).mount('#app')
