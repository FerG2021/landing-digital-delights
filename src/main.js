import { createApp } from 'vue';
import './assets/style.css';
import App from './App.vue';
import { i18n } from './plugins/i18n';
import store from './managers/store/store';
import axios from 'axios';
import VueAxios from 'vue-axios';
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
import router from './managers/router/Router.js';
import Store from './managers/store/store';

// const subdomain = window.location.host.split('.')[0]; 
const subdomain = 'bunker'; 
// const subdomain = 'chinis'; 
import(`./assets/accounts/${subdomain}/${subdomain}.css`);
Store.commit('UsersStore/setAccount', subdomain);

import loadModulesByAccount from './utils/modulesLoader';
const account = 'admin';
loadModulesByAccount(store, router, account);

// PrimeVue
import PrimeVue from 'primevue/config';

// PrimeVue Components
import 'primevue/resources/themes/saga-blue/theme.css'; //theme
import 'primevue/resources/primevue.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
import InputText from 'primevue/inputtext';
import Sidebar from 'primevue/sidebar';


createApp(App)
	.use(i18n)
	.use(VueAxios, axios)
	.use(store)
	.use(router)
	.use(PrimeVue)
	.component('Button', Button)
	.component('ProgressSpinner', ProgressSpinner)
	.component('InputText', InputText)
	.component('Sidebar', Sidebar)
	.mount('#app');
