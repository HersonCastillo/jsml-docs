import { Page, Routes, tag } from '@duox/jsml';
import { Column } from '../components/column';
import { Container } from '../components/container';
import { Menu } from '../components/menu';
import { Row } from '../components/row';
import { routes } from '../constants/routes';

import './app.scss';

@Routes({
  routes,
  zoneId: 'navigation-one',
})
@Page()
export class App {
  
  route = tag('router-outlet', null, null, {
    key: 'navigation-one',
  });
  
  render() {
    return [
      Container({
        style: {
          padding: '10px',
          marginTop: '4em',
        },
        child: [
          tag('h1', 'JSML Documentation'),
          Row({
            style: {
              paddingTop: '3em',
            },
            children: [
              Column({
                classNames: ['col-lg-3'],
                child: Menu(),
              }),
              Column({
                classNames: ['col-lg-9', 'main-content'],
                child: this.route,
              }),
            ],
          }),
        ],
      }),
    ];
  }
}
