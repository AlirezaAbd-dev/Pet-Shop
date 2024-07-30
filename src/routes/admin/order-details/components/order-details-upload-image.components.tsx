import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import SvgDelete32 from '@/assets/svg/Trash, Delete, Bin32.svg';
import SvgEye32 from '@/assets/svg/eye32.svg';
import SvgFileBlankListBlue32 from '@/assets/svg/file-blank-list-blue32.svg';

import useUploadOrderFactorMutation from '../queries/upload-order-factor-mutation';

const OrderDetailsUploadImage = () => {
  const [uploadedFiles, setUploadedFiles] = useState<
    (File & { preview: string })[]
  >([]);

  const { mutateAsync, isPending } = useUploadOrderFactorMutation();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: async (acceptedFiles) => {
      const formData = new FormData();
      formData.append('receipt', acceptedFiles[0]);

      const response = await mutateAsync(formData);

      console.log(response);

      // setUploadedFiles(
      //   acceptedFiles.map((file) =>
      //     Object.assign(file, {
      //       preview: URL.createObjectURL(file),
      //     }),
      //   ),
      // );
    },
  });

  useEffect(() => {
    return () =>
      uploadedFiles.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

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
      <section className="mt-6 flex justify-between items-center">
        <p className="text-lg font-semibold ">Name File</p>
        <div className="flex gap-3 items-center">
          <SvgEye32 />
          <SvgDelete32 />
        </div>
      </section>
      {uploadedFiles.map((f) => (
        <img
          key={f.name}
          src={f.preview}
          onLoad={() => {
            URL.revokeObjectURL(f.preview);
          }}
        />
      ))}
    </>
  );
};

export default OrderDetailsUploadImage;
