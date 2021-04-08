import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

hljs.highlightAll();

export const useMarkdown = (content: string): string => {
  const markdown = new MarkdownIt({
    html: true,
    typographer:  true,
    breaks: true,
    linkify: true,
    langPrefix:   'language-',
    highlight: (str, language) => {
      if (language && hljs.getLanguage(language)) {
        try {
          return hljs.highlight(str, { language }).value;
        } catch (__) {}
      }
      return '';
    },
  });
  return markdown.render(content);
}
