import { Page, PagePhase } from '@duox/jsml';
import { Br } from '../components/br';
import { Layout } from '../components/layout';
import { Span } from '../components/span';

@Page({
  title: 'JSML | Dependency Injection'
})
export class DIPage implements PagePhase {
  render() {
    return [
      Layout('Dependency Injection', [
        Br,
        Span('Working on that!'),
      ]),
    ];
  }
}
