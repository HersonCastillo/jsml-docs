import { Component } from '@duox/jsml';

export const P = (text: string): Component => ({
  child: text,
  tag: 'p'
});