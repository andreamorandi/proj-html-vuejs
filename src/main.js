import { createApp } from 'vue';
import App from './App.vue';
import  VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyA7IWojdovambRQ5ZuWoKRaHE_81m7n960',
    },
}).mount('#app');
