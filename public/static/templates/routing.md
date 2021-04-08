# Routing

The simple routing system is a direct comparison management with the browser's tab hash, other routing packages can be used without any problem.

How you can use our routing system?

`pages/home.ts`
```typescript
import { Page, tag } from '@duox/jsml';

@Page()
export class HomePage {
  render() {
    return [
      tag('span', 'You\'re on Home page'),
    ];
  }
}
```

`main.ts`
```typescript
import { Page, Route, tag } from '@duox/jsml';

const zoneId = 'navigation-one';

const routes: Route[] = [
  {
    page: import('pages/home.page').then((c) => (c.HomePage)),
    default: true,
    path: 'home',
  },
];

@Page({
  routes,
  zoneId,
})
export class App {
  render() {
    return [
      tag('router-outlet', null, null, {
        key: zoneId,
      }),
    ];
  }
}
```

**Route** interface:

| Name | Default value | Data type | Description |
| -- | -- | -- | -- |
| `page` | `null` | `Promise` | Lazy load of the page. |
| `default` | `false` | `boolean` | If the page will be triggered when the location hash stay on empty, default route. |
| `path` | `null` | `string` | Path of the page. |
| `onLoad` | `null` | `(route: Route) => void` | Function that will be called before instantiating the page. |