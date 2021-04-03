import { Component, tag } from '@duox/jsml';

export const Column = ({ child, classNames }: ColumnProps) =>
  tag('div', child, null, {
    classNames: ['col', ...(classNames ?? [])]
  });

interface ColumnProps {
  child: Component;
  classNames?: string[];
}
