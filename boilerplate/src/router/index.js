import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/samplea',
    },
    {
      path: '/samplea',
      name: 'samplea',
      component: () => import('../components/samples/PageSampleA.vue'),
    },
    {
      path: '/sampleb',
      name: 'sampleb',
      component: () => import('../components/samples/PageSampleB.vue'),
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   next();
// });

export default router;
