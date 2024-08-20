import { Metadata } from 'next';

import ForgotPassword from '@/routes/(registeration)/forgot-password';

export const metadata: Metadata = {
  title: 'USpet - Forgot password',
};

const page = () => {
  return <ForgotPassword />;
};

export default page;
