import utils from '@/libs/utils';
// index.js,hooks,not-found排除掉
let routers = utils.importAll(
  require.context('./', true, /^(?!.*(?:(index|each|not-found).js$)).*\.js$/),
  'array'
);

routers = routers.reduce((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

export default [
  {
    path: '/',
    component: () =>
      import(
        /* webpackPrefetch: true */ /* webpackChunkName: "layout" */ '@/components/layout'
      ),
    redirect: '/home',
    meta: {},
    children: [...routers]
  }
];
