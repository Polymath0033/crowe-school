import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import NewsUi from "./components/news/NewsUi.vue"
import {
  faWalking,
  faEye,
  faMusic,
  faPlus,
  faMinus,
  faPencil,
  faEraser,
  faBookOpenReader,
  faBookOpen
} from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'
import VueTelInput from 'vue-tel-input'

import 'vue-tel-input/vue-tel-input.css'
const globalOptions = {
  mode: 'auto'
}

library.add(
  faWalking,
  faEye,
  faMusic,
  faPlus,
  faMinus,
  faPencil,
  faEraser,
  faBookOpen,
  faBookOpenReader
)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('news-ui',NewsUi)
app.use(createPinia())
app.use(router)

//@ts-ignore
app.use(VueTelInput, globalOptions)
app.mount('#app')
