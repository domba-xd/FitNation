const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: 'pocetna', component: () => import('@/pages/pocetna.vue') },
      { path: 'registracijaiprijava', component: () => import('@/pages/Registracijaiprijava.vue') },
      { path: 'clanarine', component: () => import('@/pages/clanarine.vue') },
      { path: 'osobnipodaci', component: () => import('@/pages/osobnipodaci.vue') },
      { path: 'aktivnosti', component: () => import('@/pages/aktivnosti.vue') },
      { path: 'termini', component: () => import('@/pages/termini.vue') },
      { path: 'treneri', component: () => import('@/pages/treneri.vue') },
      { path: 'rezervacije', component: () => import('@/pages/rezervacije.vue') },
      { path: 'napredak', component: () => import('@/pages/napredak.vue') },
      { path: 'feedback', component: () => import('@/pages/feedback.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes
