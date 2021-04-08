import { Component, tag, Updater } from '@duox/jsml';
import { useMarkdown } from '../constants/useMarkdown';
import { MarkdownService } from '../services/markdown.service';
import { Spinner } from './spinner';

export const RenderMarkdown = (
  templateName: string,
  markdownService: MarkdownService,
  updater: Updater,
): Component => {
  let loading = false;
  let content: string | null = null;

  const retrieveContent = async () => {
    loading = true;
    const template = await markdownService.retrieveMarkdown(templateName);
    content = useMarkdown(template);
    loading = false;
    updater.update(child());
  };

  retrieveContent();

  const child = () => Spinner(loading, tag('div', content, null, {
    classNames: ['markdown-body'],
  }), 'fill-content');

  return child();
}
