import { useQuery } from '@tanstack/react-query';
import React, { ReactNode } from 'react';

import Navbar from '@/components/shared/navbar/navbar.component';
import useAxiosProtected from '@/hooks/use-axios-protected.hook';

type CoreLayoutProps = {
  children: ReactNode;
};

const CoreLayout = (props: CoreLayoutProps) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};

export default CoreLayout;
