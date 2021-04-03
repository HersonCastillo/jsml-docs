import { Page, PagePhase, tag } from '@duox/jsml';
import { Layout } from '../components/layout';

@Page({
  title: 'JSML | Dependency Injection'
})
export class DIPage implements PagePhase {
  render() {
    return [
      Layout('Dependency Injection', [
        tag('br'),
        tag('span', 'Working on that!'),
      ]),
    ];
  }
}
