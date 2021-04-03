import { Page, PagePhase, tag } from '@duox/jsml';
import { Layout } from '../components/layout';

const copyCodeBlock = require('@pickra/copy-code-block');

@Page({
  title: 'JSML | Routing'
})
export class RoutingPage implements PagePhase {
  routingExample = `
    import {
      Component,
      PagePhase,
      Route,
      Page,
      Routes
    } from '@duox/jsml';
    import { Container } from '../components/container';
    import { HomePage } from './home.page';
    
    const routes: Route[] = [
      {
        Page: HomePage,
        default: true,
        path: 'home',
      }
    ];
    
    @Routes({
      routes,
      zoneId: "main[key='main-navigation']"
    })
    @Page()
    export class App implements PagePhase {
      render(): Component[] {
        return [
          Container({
            key: 'main-navigation'
          }),
        ];
      }
    }
  `;

  render() {
    return [
      Layout('Routing System', [
        tag('br'),
        tag('p', `
          The simple routing system is a direct comparison management with the browser's tab hash, 
          other routing packages can be used without any problem.
        `),
        tag('div', copyCodeBlock(this.routingExample)),
      ]),
    ];
  }
}
