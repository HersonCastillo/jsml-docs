import { Component, Updater } from '@duox/jsml';
import { MenuItemProp, menuItems } from '../constants/menu-items';

const MenuItem = ({ label, href, callback }: MenuItemProp): Component => {
  let currentHashPath = location.hash;
  if (currentHashPath === '') {
    currentHashPath = 'home';
  }
  const match = href.includes(currentHashPath);

  return {
    tag: 'li',
    classes: ['nav-item'],
    child: {
      tag: 'a',
      classes: ['nav-link', match ? 'active' : undefined!],
      child: label,
      href,
    },
    events: [
      {
        name: 'click',
        handler: callback!,
      }
    ]
  };
};

export const Menu = (): Component => {
  const updater = new Updater();

  const onMenuItemClicks = () => {
    setTimeout(() => updater.update(child()), 1);
  };

  const onRouteChange = () => {
    onMenuItemClicks();
  };

  setTimeout(() => {
    // Removing existing events from re-rendering
    window.removeEventListener('hashchange', onRouteChange);

    window.addEventListener('hashchange', onRouteChange);
  }, 1);


  const child = (): Component => ({
    tag: 'nav',
    classes: ['nav', 'flex-column', 'nav-pills'],
    key: 'navigation-items',
    child: [
      ...menuItems.map(({ label, href }) => (
        MenuItem({
          label,
          href,
          callback: onMenuItemClicks
        })
      )),
    ],
  });

  return child(); 
};
