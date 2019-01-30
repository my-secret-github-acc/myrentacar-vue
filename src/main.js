import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode: "history",

  routes: [
    {
      path: "*",
      // Specify the component to be rendered for this route
      component: App,
      // Inject  props based on route.query values (our query parameters!)
      props: route => ({
        pickup_city_id: route.query.pickup_city_id,
        dropoff_city_id: route.query.dropoff_city_id
      })
    }
  ]
});

new Vue({
  router,
  el: "#app",
  components: { App },
  template: "<router-view><App/></router-view>"
});