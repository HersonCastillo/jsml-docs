import { Page, Updater } from '@duox/jsml';
import { RenderMarkdown } from '../components/markdown';
import { MarkdownService } from '../services/markdown.service';

@Page({
  title: 'JSML | Components',
  providers: [MarkdownService]
})
export class ComponentsPage {

  constructor(
    private updater: Updater,
    private markdownService: MarkdownService,
  ) { }

  render() {
    return [
      RenderMarkdown(
        'components',
        this.markdownService,
        this.updater,
      ),
    ];
  }
}
