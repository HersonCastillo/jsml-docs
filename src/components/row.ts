import { Component } from '@duox/jsml';

export const Row = ({ className, children, style }: RowProps): Component => ({
  tag: 'div',
  classes: ['row', className!],
  child: children,
  style,
});

interface RowProps {
  className?: string;
  style?: Partial<CSSStyleDeclaration>;
  children: Component[];
}
