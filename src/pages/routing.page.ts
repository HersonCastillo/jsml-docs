import { Page, Updater } from '@duox/jsml';
import { RenderMarkdown } from '../components/markdown';
import { MarkdownService } from '../services/markdown.service';

@Page({
  title: 'JSML | Routing',
  providers: [MarkdownService],
})
export class RoutingPage {

  constructor(
    private updater: Updater,
    private markddownService: MarkdownService,
  ) { }

  render() {
    return [
      RenderMarkdown(
        'routing',
        this.markddownService,
        this.updater,
      ),
    ];
  }
}
