# Updater 

What is **Updater**?
*Updater* are a class that you can use to re-render something, sometimes we need to update some piece of our template, you can do it manually with `innerHTML` or other stuff from the DOM, but wuth **Updater** you just need to pass the child that you will be updating.

By default Updater was injected before the content was rendered, so you can use it any time!
You must pass a **key** prop to have a sucessfully re-render.

Example.

```typescript
import { Page, tag } from '@duox/jsml';

export class HomePage {
  constructor(
    private updater: Updater,
  ) { }

  onRender() {
    setTimeout(() => {
      this.updater.update(this.someChild(true));
    }, 3000);
  }

  someChild(flag: boolean) {
    return tag('span', flag ? 'Hey!' : 'Bad way dude!', null, {
      key: 'some-random-keyname',
    });
  }

  render() {
    return [this.someChild(false)];
  }
}
```

And that's it!

You can use the method `update` to re-render a single child or if you have a lot of children that you want update, you can use the `updateChildren` method to do it.
