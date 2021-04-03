import { Page, tag } from '@duox/jsml';

@Page()
export class NotFound {
  render() {
    return [tag('span', 'Page not found :(')];
  }
}
