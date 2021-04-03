import { PagePhase, Page, tag } from '@duox/jsml';
import { Layout } from '../components/layout';

const copyCodeBlock = require('@pickra/copy-code-block');

@Page({
  title: 'JSML | Getting Started',
})
export class HomePage implements PagePhase {
  render() {
    return [
      Layout('Getting Started', [
        tag('br'),
        tag('p', `
          JSML is an interface library that collects some important definitions from other frameworks and puts them in one place,
          why? basically that with this you can start to develop intelligent and effective systems.
          This library is a learning medium, it should not be used for projects in production.
          `),
        tag('span', 'How you can start using it?'),
        tag('br'),
        tag('br'),
        tag('div', copyCodeBlock('\nnpm i --save @duox/jsml')),
        tag('span', 'And only that!'),
      ]),
    ];
  }
}
