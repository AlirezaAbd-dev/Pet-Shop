import { CommentStatus } from './queries/admin-comments.query';

export const ADMIN_COMMENT_TABS: {
  name: string;
  value: CommentStatus | 'all';
}[] = [
  {
    name: 'All comment',
    value: 'all',
  },
  { name: 'Confirmed', value: 'accepted' },
  { name: 'Awaiting confirmation', value: 'pending' },
] as const;

export type AdminCommentTabsType = (typeof ADMIN_COMMENT_TABS)[number]['value'];
