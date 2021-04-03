import { Route } from '@duox/jsml';

export const routes: Route[] = [
  {
    page: import('../pages/home.page').then((c) => (c.HomePage)),
    default: true,
    path: 'home',
  },
  {
    page: import('../pages/pages.page').then((c) => (c.PagesPage)),
    path: 'pages',
  },
  {
    page: import('../pages/components.page').then((c) => (c.ComponentsPage)),
    path: 'components',
  },
  {
    page: import('../pages/routing.page').then((c) => (c.RoutingPage)),
    path: 'routing-system',
  },
  {
    page: import('../pages/di.page').then((c) => (c.DIPage)),
    path: 'di',
  },
  {
    page: import('../pages/updater.page').then((c) => (c.UpdaterPage)),
    path: 'updater',
  },
  {
    page: import('../pages/not-found.page').then((c) => (c.NotFound)),
    path: '**',
  },
];
