import { Singleton } from '@duox/jsml';

@Singleton()
export class MarkdownService {
  async retrieveMarkdown(templateName: string): Promise<string> {
    return await fetch(`/templates/${templateName}.md`, {
      method: 'get'
    }).then((response) => (response.text()));
  }
}
