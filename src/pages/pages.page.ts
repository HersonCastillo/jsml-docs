import { Page, PagePhase, Updater } from '@duox/jsml';
import { RenderMarkdown } from '../components/markdown';
import { MarkdownService } from '../services/markdown.service';

@Page({
  title: 'JSML | Pages',
  providers: [MarkdownService]
})
export class PagesPage implements PagePhase {
  
  constructor(
    private updater: Updater,
    private markdownService: MarkdownService,
  ) { }
  
  render() {
    return [
      RenderMarkdown(
        'pages',
        this.markdownService,
        this.updater,
      ),
    ];
  }
}
