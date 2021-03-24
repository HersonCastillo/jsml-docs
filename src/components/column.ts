import { Component } from '@duox/jsml';

export const Column = ({ child, className }: ColumnProps): Component => ({
  tag: 'div',
  classes: ['col', className!],
  child,
});

interface ColumnProps {
  child: Component;
  className?: string;
}
