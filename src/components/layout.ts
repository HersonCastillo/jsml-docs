import { Component, tag } from '@duox/jsml';

export const Layout = (title: string, child: Component[]) => tag('section', [
  tag('h3', title),
  tag('div', child),
]);
