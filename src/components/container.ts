import { Component } from '@duox/jsml';
import { Div } from './div';

export const Container = ({
  child,
  classes,
  key,
  ...rest
}: ContainerProps): Component => Div({
  child: child!,
  classes: ['container', ...(classes ?? [])],
  key,
  ...rest,
});

interface ContainerProps {
  child?: Component | Component[];
  key?: string;
  classes?: string[];
  style?: Partial<CSSStyleDeclaration>;
}
