import React, { ReactNode } from 'react';

import Navbar from '@/components/shared/navbar.component';

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
