import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';
import Products from "./pages/product/index.vue";
import Cart from "./pages/product/cart.vue";
import Dashbord from "./pages/dashbord/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/products" },

    { path: "/dashboard", component: Dashbord, meta: { requiresAuth: false } },
    { path: "/products", component: Products, meta: { requiresAuth: false } },
    { path: "/cart", component: Cart, meta: { requiresAuth: false } },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

router.beforeEach(function(to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/coaches');
  } else {
    next();
  }
});

export default router;
