export const ADMIN_COMMENT_TABS = [
  {
    name: 'All comment',
  },
  { name: 'Confirmed' },
  { name: 'Awaiting confirmation' },
] as const;

export type AdminCommentTabsType = (typeof ADMIN_COMMENT_TABS)[number]['name'];
