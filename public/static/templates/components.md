# Components

A **component** is one that will be rendered when the instance of a page is created, it is an object with Javascript properties and this can be a tree of components, one after another.

Example.

```typescript
import { Component } from '@duox/jsml';

export const componentOne = (message: string): Component => ({
  tag: 'div',
  child: message,
  style: {
    backgroundColor: 'blue',
    color: 'white',
  },
  events: [
    {
      name: 'click',
      handler: () => {
        console.log('Click!');
      }
    }
  ],
});
```

And that's it.

For the day-to-day you might use the named helper called **tag**, just to write less code for each component.

Example 

```typescript
import { tag } from '@duox/jsml';

export const componentTwo = (message: string) => tag('div', message, {
  backgroundColor: 'blue',
  color: 'white',
});
```
