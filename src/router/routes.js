const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('src/pages/HomePage.vue') },
      { path: '/AboutPage', name: 'About', component: () => import('src/pages/AboutPage.vue') },
      { path: '/SkillPage', name: 'Skill', component: () => import('src/pages/SkillPage.vue') },
      {
        path: '/ServicePage',
        name: 'Service',
        component: () => import('src/pages/ServicePage.vue'),
      },
      {
        path: '/ContactPage',
        name: 'Contact',
        component: () => import('src/pages/ContactPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
