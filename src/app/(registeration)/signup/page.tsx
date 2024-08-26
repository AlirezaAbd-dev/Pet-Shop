import { Metadata } from 'next';

import SignupPages from '@/routes/(registeration)/signup/pages';

export const metadata: Metadata = {
  title: 'uspetinc - Signup',
};

const SignupPage = () => {
  return <SignupPages />;
};

export default SignupPage;
