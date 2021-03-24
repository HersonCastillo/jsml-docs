export const menuItems: MenuItemProp[] = [
  {
    label: 'Getting Started',
    href: '#home',
  },
  {
    label: 'Pages',
    href: '#pages',
  },
  {
    label: 'Components',
    href: '#components',
  },
  {
    label: 'Routing',
    href: '#routing-system',
  },
  {
    label: 'Dependency Injection (DI)',
    href: '#di',
  },
  {
    label: 'Updater',
    href: '#updater',
  },
];

export interface MenuItemProp {
  label: string;
  href: string;
  callback?: () => void;
};
