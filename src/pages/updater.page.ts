import { Page, PagePhase, tag } from '@duox/jsml';
import { Layout } from '../components/layout';

@Page({
  title: 'JSML | Updater'
})
export class UpdaterPage implements PagePhase {
  render() {
    return [
      Layout('Updater', [
        tag('br'),
        tag('span', 'Working on that!'),
      ]),
    ];
  }
}
