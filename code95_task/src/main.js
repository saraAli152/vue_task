import { createApp } from 'vue'



import App from './App.vue'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App)

app.use(bootstrap)
app.mount('#app') 


// Import Bootstrap and BootstrapVue CSS files (order is important)


// Make BootstrapVue available throughout your project

// Optionally install the BootstrapVue icon components plugin

