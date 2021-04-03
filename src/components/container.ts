import { Component, tag } from "@duox/jsml";

export const Container = ({
  child,
  classNames,
  style,
  ...rest
}: ContainerProps): Component =>
  tag('div', child!, style, {
    classNames: ["container", ...(classNames ?? [])],
    ...rest,
  });

interface ContainerProps {
  child?: Component | Component[];
  classNames?: string[];
  style?: Partial<CSSStyleDeclaration>;
}
