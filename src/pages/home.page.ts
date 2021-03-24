import { PagePhase, Page } from '@duox/jsml';
import { Span } from '../components/span';
import { Div } from '../components/div';
import { H } from '../components/h';
import { P } from '../components/p';
import { Br } from '../components/br';

const copyCodeBlock = require('@pickra/copy-code-block');

@Page({
  title: 'JSML | Getting Started'
})
export class HomePage implements PagePhase {
  render() {
    return [
      H('Getting Started', 3),
      Div({
        child: [
          Br,
          P(`
          JSML is an interface library that collects some important definitions from other frameworks and puts them in one place,
          why? basically that with this you can start to develop intelligent and effective systems.
          This library is a learning medium, it should not be used for projects in production.
          `),
          Span('How you can start using it?'),
          Br,
          Br,
          Div({ child: copyCodeBlock('\nnpm i --save @duox/jsml') }),
          Span('And only that!'),
        ],
      }),
    ];
  }
}
