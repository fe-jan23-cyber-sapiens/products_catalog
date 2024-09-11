import { RoutePath } from '../../routes/RoutePath';

export enum LinkType {
  LINK = 'link',
  BUTTON = 'button',
}

export const companyInfo = [
  {
    link: 'https://github.com/fe-jan23-cyber-sapiens',
    title: 'Github',
    type: LinkType.LINK,
  },
  {
    link: RoutePath.contacts,
    title: 'Contacts',
    type: LinkType.BUTTON,
  },
  {
    link: RoutePath.rights,
    title: 'Rights',
    type: LinkType.BUTTON,
  },
];
