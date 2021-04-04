import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';

import App from './App';

import './config/bootstrap';
import './config/msgs';
import store from './config/store';
import router from './config/router';

Vue.config.productionTip = false;

// eslint-disable-next-line no-undef
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkpvYW8gU2F0aXJvIiwiZW1haWwiOiJqb2Fvc2F0aXJvMTdAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYxNzU1OTgwNiwiZXhwIjoxNjE3ODE5MDA2fQ.umslQ101_lQ0lKvtovEjW3Z2D2BlhLf0quC-HMr-TxM';

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');