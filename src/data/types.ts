export interface LinkData {
  title: string;
  url: string;
  target: string | null;
}

export interface Seo {
  title: string;
  metaDesc: string;
}

export interface IconItem {
  icon: string;
  title: string;
  text: string;
}

export interface FrontPageACF {
  intro: {id: string; text: string; titlepart1: string; titlepart2: string};
  about: {id: string; items: IconItem[]; link: LinkData; text: string; title: string};
  contact: {id: string; link: LinkData; text: string; titlepart1: string; titlepart2: string};
  era: {id: string; link: LinkData; text: string; title: string};
  finsystem: {id: string; items: {text: string; title: string; link: LinkData}[]; title: string};
  news: {id: string; title: string};
  suite: {id: string; items: (IconItem & {link: LinkData})[]; text: string; title: string};
  why: {id: string; items: {text: string; title: string}[]; text: string; title: string};
}

export interface MenuItemNode {
  cssClasses: string[];
  url: string;
  target: string | null;
  parentId: string | null;
  id: string;
  label: string;
}

export interface Menu {
  name: string;
  locations: string[];
  items: MenuItemNode[];
}

export interface Social {
  url: string;
  network: string;
}

export interface Post {
  databaseId: number;
  title: string;
  link: string;
  date: string;
  featuredImage: {altText: string; url: string} | null;
  categories: {name: string; slug: string}[];
}
