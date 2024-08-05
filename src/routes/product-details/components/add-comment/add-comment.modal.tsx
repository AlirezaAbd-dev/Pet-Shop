import { X } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

import { useProductDetailsStore } from '../../product-details.store';
import AddCommentForm from './add-comment.form';

const AddCommentModal = () => {
  const isModalOpen = useProductDetailsStore((s) => s.isCommentModalOpen);
  const setIsModalOpen = useProductDetailsStore((s) => s.setIsCommentModalOpen);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogContent
        aria-describedby="add comment"
        className="w-[90%] md:max-w-[458px] bg-white flex flex-col items-center p-0"
      >
        <div className="w-full flex justify-between items-center bg-nature-800 p-4 rounded-t-2xl">
          <p className="font-nunito font-bold">Register a comment</p>
          <X
            className="text-secondary-300 w-[16px] h-[16px] md:w-[20px] md:h-[20px] cursor-pointer"
            onClick={() => {
              setIsModalOpen(false);
            }}
          />
        </div>
        <AddCommentForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddCommentModal;
