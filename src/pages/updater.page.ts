import { Page, Updater } from '@duox/jsml';
import { RenderMarkdown } from '../components/markdown';
import { MarkdownService } from '../services/markdown.service';

@Page({
  title: 'JSML | Updater',
  providers: [MarkdownService],
})
export class UpdaterPage {

  constructor(
    private updater: Updater,
    private markdownService: MarkdownService,
  ) { }

  render() {
    return [
      RenderMarkdown(
        'updater',
        this.markdownService,
        this.updater,
      ),
    ];
  }
}
