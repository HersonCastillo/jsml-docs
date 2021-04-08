# Dependency Injection

JSML use a basic integration of DI, very intuitive and useful for a lot of use cases.

We have a Singleton and that Singletons can be applied in any **Page** of the site.
JSML can recogonize when a class are a Service by a Decorator called `Singleton`.

Example

`services/user.ts`
```typescript
import { Singleton } from '';

@Singleton()
export class UserService {

  async retrieveUsersList(): Promise<any> {
    return fetch('https://your-backend.io/users', {
      method: 'get',
    }).then(r => r.json());
  }

}
```

In a page can be used as the following:

`pages/home.ts`
```typescript
import { Page, Updater } from '@duox/jsml';
import { UserService } from './services/user';

@Page({
  providers: [UserService],
})
export class HomePage {
  constructor (
    private updater: Updater,
    private userService: UserService
  ) { }

  render() {
    return [];
  }
}
```

With this example you can use your `userService` in any time!

That instance is available since the Page was created, just keep in mind something,
the injection *Updater* **always** be there, its a default DI that will help you to make the re-renderization more efficent!

Enjoy!
