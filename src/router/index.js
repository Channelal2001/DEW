import { createRouter, createWebHistory } from 'vue-router'
import landingPage from '../views/landingPage.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import home from '../views/home.vue'
import accountManager from '../views/accountManager.vue'
import chat from '../views/chat.vue'
import wishlist from '../views/wishlist.vue'
import newWishlist from '../views/newWishlist.vue'
import wishlistGift from '../views/wishlistGift.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'landingPage',
            component: landingPage
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/signup',
            name: 'signup',
            component: signup
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/accountManager',
            name: 'accountManager',
            component: accountManager
        },
        {
            path: '/chat',
            name: 'chat',
            component: chat
        },
        {
            path: '/wishlist',
            name: 'wishlist',
            component: wishlist
        },
        {
            path: '/newWishlist',
            name: 'newWishlist',
            component: newWishlist
        },
        {
            path: '/wishlistGift',
            name: 'wishlistGift',
            component: wishlistGift
        },

    ]
})

export default router