export const BLOG_TABS = [
  {
    name: 'Cat',
  },
  {
    name: 'Dog',
  },
  {
    name: 'Fish',
  },
  {
    name: 'Bird',
  },
] as const;

export type BlogTabsType = (typeof BLOG_TABS)[number]['name'];
