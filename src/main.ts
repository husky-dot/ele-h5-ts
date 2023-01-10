import { createApp } from 'vue'
import 'amfe-flexible'
import 'vant/es/dialog/style';
import 'vant/es/toast/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')
