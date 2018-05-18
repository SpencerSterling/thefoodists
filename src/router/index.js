import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import DevTest from '@/components/DevTest';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/dev',
      name: 'DevTest',
      component: DevTest,
    },
    {
      path: '*',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
