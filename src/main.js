import { createApp } from 'vue';
import App from './App.vue';
import "@fortawesome/fontawesome-free/css/all.min.css";
import  VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCSigM_PzgAY0VY2uNyDXXAVGfoEDXjvIs',
    },
}).mount('#app');
