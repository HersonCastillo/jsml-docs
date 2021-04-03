import { Component, tag } from "@duox/jsml";

export const Row = ({ classNames, children, style }: RowProps) =>
  tag('div', children, style, {
    classNames: ['row', ...(classNames ?? [])]
  });

interface RowProps {
  classNames?: string[];
  style?: Partial<CSSStyleDeclaration>;
  children: Component[];
}
