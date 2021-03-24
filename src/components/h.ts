import { Component } from '@duox/jsml';

export const H = (text: string, level: number): Component => ({
  tag: `h${level}`,
  child: text,
});
