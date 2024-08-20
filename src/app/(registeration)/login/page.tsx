import { Metadata } from 'next';

import Login from '@/routes/(registeration)/login';

export const metadata: Metadata = {
  title: 'USpet - login',
};
const page = () => {
  return <Login />;
};

export default page;
