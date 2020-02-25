import DashView from './components/Dash.vue'

import DashboardView from './components/views/Dashboard.vue'

const routes = [
  {
    path: '/',
    component: DashView,
    children: [
      {
        path: 'dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard'
      }
    ]
  }
]

export default routes
