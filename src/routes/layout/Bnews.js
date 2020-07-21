export default [
  {
    path: "/news/list",
    name: "新闻中心",
    component: () => import("@/views/news"),
    meta: {
      icon:'&#xe613;'
    },
    children:[
      {
        path: '/news/list',
        name: 'list',
        component: () => import('@/views/news/list'),
      },
      {
        path: '/news/info',
        name: 'info',
        component: () => import('@/views/news/info'),
      }
    ]
  }
];
