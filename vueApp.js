

import {createApp} from 'vue'
import App from './start.vue'
import vuetify from "./vuetify";

const app = createApp(App)
app.use(vuetify)
app.mount('#app')