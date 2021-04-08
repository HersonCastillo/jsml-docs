import { Component, tag } from '@duox/jsml';

export const Spinner = (status: boolean, child: Component, key?: string): Component => {
  return status ? (
    tag('div', tag('div', null, null, {
      classNames: ['spinner-border'],
      role: 'status',
    }), null, {
      classNames: ['d-flex', 'justify-content-center'],
      key: key!
    })
  ) : { ...child, key };
};
