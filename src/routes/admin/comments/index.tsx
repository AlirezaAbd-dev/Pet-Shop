'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import LoadingSpinner from '@/components/ui/loading-spinner';

import AdminCommentCard from './admin-comment-card.component';
import {
  ADMIN_COMMENT_TABS,
  AdminCommentTabsType,
} from './comment.tabs.constants';
import useAdminCommentsQuery from './queries/admin-comments.query';

const AdminComments = () => {
  const [tabsValue, setTabValue] = useState<AdminCommentTabsType>(
    ADMIN_COMMENT_TABS[0].value,
  );
  const { data, isPending } = useAdminCommentsQuery();

  if (isPending) return <LoadingSpinner className="mt-20" />;

  if (!isPending && data) {
    const comments = data
      .filter((c) => {
        // if (tabsValue === 'all') return c.status !== 'decline';
        if (tabsValue === 'all') return true;
        else {
          return c.status === tabsValue;
        }
      })
      .toReversed();

    return (
      <main className="mt-9">
        <section className="flex gap-4">
          {ADMIN_COMMENT_TABS.map((item) => (
            <Button
              key={item.value}
              variant={
                item.value !== tabsValue ? 'primary-deactive' : 'default'
              }
              onClick={() => {
                setTabValue(item.value);
              }}
              className="w-full h-11 md:text-base"
            >
              {item.name}
            </Button>
          ))}
        </section>
        <ul className="mt-9 flex flex-col gap-9">
          {comments.length === 0 && (
            <p className="text-center text-lg font-semibold text-secondary-300">
              Nothing to show
            </p>
          )}
          {comments.map((c) => (
            <AdminCommentCard
              key={c.id}
              id={c.id}
              content={c.comment}
              productsName={c.product_name}
              status={c.status}
              username={c.reviewer}
              email={c.user_email}
              phone={c.user_phone_number}
              response={c.response}
            />
          ))}
        </ul>
      </main>
    );
  }
};

export default AdminComments;
