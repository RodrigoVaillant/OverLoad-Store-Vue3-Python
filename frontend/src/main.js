import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Aura from '@primevue/themes/Aura'

import App from './App.vue'
import router from './router'
import { Ripple } from 'primevue';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }},
    {
        ripple: true
    }
)

app.component('Button', Button);
app.mount('#app')
