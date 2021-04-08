import { Page, Updater } from '@duox/jsml';
import { RenderMarkdown } from '../components/markdown';
import { MarkdownService } from '../services/markdown.service';

@Page({
  title: 'JSML | Dependency Injection',
  providers: [MarkdownService],
})
export class DIPage {

  constructor(
    private updater: Updater,
    private markdownService: MarkdownService,
  ) { }

  render() {
    return [
      RenderMarkdown(
        'di',
        this.markdownService,
        this.updater,
      ),
    ];
  }
}
