'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/ui/loading-spinner';

import AdminCommentCard from './admin-comment-card.component';
import useAdminCommentsQuery from './admin-comments.query';
import {
  ADMIN_COMMENT_TABS,
  AdminCommentTabsType,
} from './comment.tabs.constants';

const AdminComments = () => {
  const [tabsValue, setTabValue] = useState<AdminCommentTabsType>(
    ADMIN_COMMENT_TABS[0].name,
  );
  const { data, isPending } = useAdminCommentsQuery();

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (!isPending && data) {
    return (
      <main className="mt-9">
        <section className="flex gap-4">
          {ADMIN_COMMENT_TABS.map((item) => (
            <Button
              key={item.name}
              variant={item.name !== tabsValue ? 'primary-deactive' : 'default'}
              onClick={() => {
                setTabValue(item.name);
              }}
              className="w-full h-11 md:text-base"
            >
              {item.name}
            </Button>
          ))}
        </section>
        <ul className="mt-9 flex flex-col gap-9">
          <AdminCommentCard />
          <AdminCommentCard />
          <AdminCommentCard />
          <AdminCommentCard />
        </ul>
      </main>
    );
  }
};

export default AdminComments;
