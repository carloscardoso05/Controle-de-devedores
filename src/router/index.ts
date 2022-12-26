import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener()
                resolve(user)
            },
            reject
        );
    });
};

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: () => import('../views/Home.vue'),
            meta: {
                requiresAuth: true
            }
        },
        { path: '/login', component: () => import('../views/Login.vue') },
        { path: '/register', component: () => import('../views/Register.vue') }
    ]
});

router.beforeEach(async(to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next()
        } else {
            alert('Você não tem acesso');
            next('/login')
        }
    } else {
        next()
    }
})

export default router;