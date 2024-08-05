import { Minus, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/auth.store';

import { useProductDetailsStore } from '../product-details.store';
import useCommentsQuery from '../queries/comments.query';
import CommentCard from './comment-card.component';

const ProductComments = () => {
  const router = useRouter();

  const [isExpanded, setIsExpanded] = useState(false);

  const profile = useAuthStore((s) => s.profile);
  const profileLoading = useAuthStore((s) => s.isLoading);
  const setCommentModalOpen = useProductDetailsStore(
    (s) => s.setIsCommentModalOpen,
  );

  const { data, isPending } = useCommentsQuery();

  if (isPending) return;

  if (!isPending && data) {
    const comments = isExpanded ? data : data.slice(0, 3);

    return (
      <main className="mt-16 md:mt-24 px-5 md:px-20">
        <section className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <p className="text-xl font-black font-nunito md:text-4xl">
              Customers comments
            </p>
            <p className="text-sm md:text-xl">{data?.length || 0} comment</p>
          </div>
          <Button
            variant={'outline'}
            isLoading={profileLoading}
            disabled={profileLoading}
            onClick={() => {
              if (!profileLoading) {
                if (profile) setCommentModalOpen(true);
                else router.push('/login');
              }
            }}
            className="w-[184px] md:w-[242px] rounded-lg md:rounded-2xl font-semibold md:font-semibold md:text-xl text-sm"
          >
            Register a comment
          </Button>
        </section>

        <ul className="flex flex-col gap-6 md:gap-10 mt-6 md:mt-9">
          {comments.map((item) => (
            <CommentCard key={item.id} {...item} />
          ))}
        </ul>
        {data.length > 3 && (
          <div
            className="flex gap-2 items-center mt-6 md:mt-10 cursor-pointer"
            onClick={() => {
              setIsExpanded((prev) => !prev);
            }}
          >
            {isExpanded ? (
              <Minus className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <Plus className="w-4 h-4 md:w-5 md:h-5" />
            )}
            <p className="font-semibold text-sm md:text-lg">
              Show {isExpanded ? 'less' : 'more'} comments
            </p>
          </div>
        )}
      </main>
    );
  }
};

export default ProductComments;
