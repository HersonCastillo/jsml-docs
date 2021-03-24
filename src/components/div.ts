import { Component } from '@duox/jsml';

export const Div = ({ child, ...rest }: DivProps): Component => ({
  tag: 'div',
  child,
  ...rest,
});

interface DivProps {
  child: Component | Component[] | string;
  style?: Partial<CSSStyleDeclaration>;
  id?: string;
  key?: string;
  classes?: string[];
}
