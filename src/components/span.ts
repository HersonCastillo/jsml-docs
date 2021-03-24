import { Component } from '@duox/jsml';

export const Span = (
  text: string,
  props?: Partial<SpanProps>
): Component => ({
  tag: "span",
  child: text,
  key: props?.key,
  classes: props?.classes,
});

interface SpanProps {
  key: string;
  classes: string[];
}
