import { PageResolver } from '@duox/jsml';
import { App } from './pages/app';

const appContainer = document.querySelector('#app') as HTMLElement;

const app = new PageResolver(App, appContainer);

app.render();
