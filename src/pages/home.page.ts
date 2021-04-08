import { PagePhase, Page, Updater } from '@duox/jsml';
import { RenderMarkdown } from '../components/markdown';
import { MarkdownService } from '../services/markdown.service';

@Page({
  title: 'JSML | Getting Started',
  providers: [MarkdownService],
})
export class HomePage implements PagePhase {
  constructor(
    private updater: Updater,
    private markdownService: MarkdownService
  ) { }

  render() {
    return [
      RenderMarkdown(
        'getting-started',
        this.markdownService,
        this.updater,
      ),
    ];
  }
}
