import { Page, PagePhase } from '@duox/jsml';
import { Br } from '../components/br';
import { Layout } from '../components/layout';
import { Span } from '../components/span';

@Page({
  title: 'JSML | Updater'
})
export class UpdaterPage implements PagePhase {
  render() {
    return [
      Layout('Updater', [
        Br,
        Span('Working on that!'),
      ]),
    ];
  }
}
