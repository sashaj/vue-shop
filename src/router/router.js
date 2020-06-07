import Vue from 'vue';
import Router from 'vue-router';

import vCatalog from '../components/catalogue/v-catalogue'
import vCart from '../components/cart/v-cart'
import vMainPage from "../components/main-page/v-main-page";

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            name: 'main-page',
            component: vMainPage
        },
        {
            path: '/catalogue',
            name: 'catalogue',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true,
        },
    ]
})

export default router;