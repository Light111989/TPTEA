const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
      },
      {
        path: 'home',
        component: () => import('pages/order.vue'),
      },
      {
        path: 'store',
        component: () => import('pages/order.vue'),
      },
      {
        path: 'order',
        component: () => import('pages/order.vue'),
      },
      {
        path: 'user',
        component: () => import('pages/order.vue'),
      },
    ],
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  })
}

export default routes
