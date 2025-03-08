import MainLayout from 'layouts/MainLayout.vue'
import LoginLayout from 'layouts/LoginLayout.vue' // Import LoginLayout

const routes = [
  {
    path: '/',
    component: MainLayout,
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
    path: '/login', // Add the login route
    component: LoginLayout,
  },
  {
    path: '/:catchAll(.*)*', // Keep only one catch-all route
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
