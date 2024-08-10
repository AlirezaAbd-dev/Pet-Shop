import { useDropzone } from 'react-dropzone';

import SvgDelete32 from '@/assets/svg/Trash, Delete, Bin32.svg';
import SvgEye32 from '@/assets/svg/eye32.svg';
import SvgFileBlankListBlue32 from '@/assets/svg/file-blank-list-blue32.svg';

import useUploadOrderFactorMutation from '../queries/upload-order-factor-mutation';

type Props = {
  id: number;
  receipt: string | null;
};

const OrderDetailsUploadImage = (props: Props) => {
  const { mutateAsync, isPending } = useUploadOrderFactorMutation();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: async (acceptedFiles) => {
      const formData = new FormData();
      formData.append('receipt', acceptedFiles[0]);

      await mutateAsync(formData);
    },
  });

  return (
    <>
      <section
        {...getRootProps()}
        className="mt-8 bg-white border border-[#004FFE] border-dashed rounded-2xl py-6 flex flex-col items-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <span className="w-[62px] h-[62px] flex items-center justify-center bg-[#004FFE] bg-opacity-5 rounded-xl">
          <SvgFileBlankListBlue32 />
        </span>
        <p className="font-bold text-xl mt-4">upload file</p>
        <p className="mt-4">Upload the payment receipt sent by the customer</p>
      </section>
      {props.receipt && (
        <section className="mt-6 flex justify-between items-center">
          <p className="text-lg font-semibold ">Name File</p>
          <div className="flex gap-3 items-center">
            <a download={`order-factor-#${props.id}`} href={props.receipt}>
              <SvgEye32 className="cursor-pointer" />
            </a>
          </div>
        </section>
      )}
    </>
  );
};

export default OrderDetailsUploadImage;
