import { Page, Updater } from '@duox/jsml';
import { RenderMarkdown } from '../components/markdown';
import { MarkdownService } from '../services/markdown.service';

@Page({
  title: 'JSML | Helpers',
  providers: [MarkdownService],
})
export class HelpersPage {

  constructor(
    private updater: Updater,
    private markdownService: MarkdownService,
  ) { }

  render() {
    return [
      RenderMarkdown(
        'helpers',
        this.markdownService,
        this.updater,
      ),
    ];
  }
}
