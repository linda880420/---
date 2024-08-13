import './assets/main.css'

import 'swiper/swiper-bundle.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'flowbite'
import 'swiper/swiper-bundle.css';
import App from './App.vue'
import router from './router'

import "./style/index.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
