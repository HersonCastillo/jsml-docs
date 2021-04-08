# Pages

A page is a **fragment** of the DOM. In this fragment must be the components that make up the page. A page is based on the PagePhase implementation (obtained from `@duox/jsml`), 
but for JSML to detect it as a page it must have a decorator called **Page**.

By inserting this decorator, the class is now considered a page and therefore it can be used in the JSML Routing System or its instance (rendered content) can be placed inside a `zone` (HTML element) with **PageResolver**.

Simple page looks like

```typescript
import { Page, tag } from '@duox/jsml';

@Page()
export class AppPage {
  render() {
    return [
      tag('span', 'Hi world!'),
    ];
  }
}
```

**@Page** decorator properties:

| Name | Default value | Rules | Data type | Description |
| -- | -- | -- | -- | -- |
| `title` | `undefined` | optional | string | Title of the site, replacing the current value of the DOM
| `providers` | `[]` | optional | `ClassProviderType[]` | The providers or services that will be injected when the Page instance is created, see Dependency Injection section for more information about it. |