import { createRouter, createWebHistory } from 'vue-router'
import landingPage from '../views/landingPage.vue'
import login from '../views/login.vue'
import forgotPassword from '../views/forgotPassword.vue'
import signup from '../views/signup.vue'
import uploadImage from '../views/uploadImage.vue'
import home from '../views/home.vue'
import accountManager from '../views/accountManager.vue'
import chat from '../views/chat.vue'
import wishlist from '../views/wishlist.vue'
import search from '../views/search.vue'
import viewProfile from '../views/viewProfile.vue'
import newGift from '../views/newGift.vue'
import newWishlist from '../views/newWishlist.vue'
import wishlistGift from '../views/wishlistGift.vue'
import wishlistGiftReserved from '../views/wishlistGiftReserved.vue'
import wishlistMoving from '../views/wishlistMoving.vue'
import wishlistMoved from '../views/wishlistMoved.vue'
import wishlistErrorMessage from '../views/wishlistErrorMessage.vue'
import chatMobileMessages from '../views/chatMobileMessages.vue'
import chatMobileChatOpen from '../views/chatMobileChatOpen.vue'

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
            path: '/forgotPassword',
            name: 'forgotPassword',
            component: forgotPassword
        },
        {
            path: '/signup',
            name: 'signup',
            component: signup
        },
        {
            path: '/uploadImage',
            name: 'uploadImage',
            component: uploadImage
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
            path: '/search',
            name: 'search',
            component: search
        },
        {
            path: '/viewProfile',
            name: 'viewProfile',
            component: viewProfile
        },

        {
            path: '/newGift',
            name: 'newGift',
            component: newGift
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
        {
            path: '/wishlistGiftReserved',
            name: 'wishlistGiftReserved',
            component: wishlistGiftReserved
        },
        {
            path: '/wishlistMoving',
            name: 'wishlistMoving',
            component: wishlistMoving
        },
        {
            path: '/wishlistMoved',
            name: 'wishlistMoved',
            component: wishlistMoved
        },
        {
            path: '/wishlistErrorMessage',
            name: 'wishlistErrorMessage',
            component: wishlistErrorMessage
        },
        {
            path: '/chatMobileMessages',
            name: 'chatMobileMessages',
            component: chatMobileMessages
        },
        {
            path: '/chatMobileChatOpen',
            name: 'chatMobileChatOpen',
            component: chatMobileChatOpen
        }
    ]
})

export default router