import { Page, PagePhase, Routes } from '@duox/jsml';
import { Column } from '../components/column';
import { Container } from '../components/container';
import { H } from '../components/h';
import { Menu } from '../components/menu';
import { Row } from '../components/row';
import { routes } from '../constants/routes';

@Routes({
  routes,
  zoneId: "[key='main-nav']",
})
@Page()
export class App implements PagePhase {
  
  route = Container({ key: 'main-nav' });
  
  render() {
    return [
      Container({
        style: {
          padding: '10px',
          marginTop: '4em',
        },
        child: [
          H('JSML Documentation', 1),
          Row({
            style: {
              paddingTop: '3em',
            },
            children: [
              Column({
                className: 'col-3',
                child: Menu(),
              }),
              Column({
                child: this.route,
              }),
            ],
          }),
        ],
      }),
    ];
  }
}
