import { Page } from '@duox/jsml';
import { Span } from '../components/span';

@Page()
export class NotFound {
  render() {
    return [Span('Page not found :(')];
  }
}
