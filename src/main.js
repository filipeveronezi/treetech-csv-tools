import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import About from './views/About'
import HeaderMigration from './views/HeaderMigration'
import Merge from './views/Merge'
import CSVVisualization from './views/CSVVisualization'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: '/', component: About },
    { path: '/csv-view', component: CSVVisualization },
    { path: '/header-migration', component: HeaderMigration },
    { path: '/merge', component: Merge },
  ]
}) 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
