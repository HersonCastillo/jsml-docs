import { Route } from '@duox/jsml';
import { ComponentsPage } from '../pages/components.page';
import { DIPage } from '../pages/di.page';
import { HomePage } from '../pages/home.page';
import { NotFound } from '../pages/not-found.page';
import { PagesPage } from '../pages/pages.page';
import { RoutingPage } from '../pages/routing.page';
import { UpdaterPage } from '../pages/updater.page';

export const routes: Route[] = [
  {
    Page: HomePage,
    default: true,
    path: 'home',
  },
  {
    Page: PagesPage,
    path: 'pages',
  },
  {
    Page: ComponentsPage,
    path: 'components',
  },
  {
    Page: RoutingPage,
    path: 'routing-system',
  },
  {
    Page: DIPage,
    path: 'di',
  },
  {
    Page: UpdaterPage,
    path: 'updater',
  },
  {
    Page: NotFound,
    path: '**',
  },
];
