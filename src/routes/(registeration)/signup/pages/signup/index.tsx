import Link from 'next/link';

import SvgGoogleDesktop from '@/assets/svg/google-desktop.svg';
import SvgGoogleMobile from '@/assets/svg/google-mobile.svg';
import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-singup-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';

import SignupForm from './signup-form';

const Signup = () => {
  return (
    <main className="flex min-h-screen justify-center items-center md:py-24 py-7">
      <section className="flex flex-col items-center px-5 md:w-[486px] md:border md:border-nature-800 md:rounded-2xl md:p-6">
        <Icon>
          <SvgLogoMobile className="md:hidden" />
          <SvgLogoDesktop className="hidden md:block" />
        </Icon>

        <h3 className="mt-6 md:mt-7 md:text-2xl font-nunito font-extrabold">
          Create your account
        </h3>
        <p className="mt-2 md:mt-3 text-sm md:text-lg">Let’s get started!</p>

        {/* <Button className="w-full flex gap-2 bg-transparent border border-nature-800 mt-6 md:mt-8 py-[11px] rounded-lg text-sm md:text-base font-normal md:font-normal text-text-500 hover:bg-transparent">
          <Icon>
            <SvgGoogleMobile className="md:hidden" />
            <SvgGoogleDesktop className="hidden md:block" />
          </Icon>
          Continue with Google
        </Button> */}

        {/* <div className="w-full flex gap-3 justify-between items-center mt-6 md:mt-8">
          <div className="w-full border-t border-nature-800"></div>
          <p className="text-sm md:text-base whitespace-nowrap">
            or continue with email
          </p>
          <div className="w-full border-t border-nature-800"></div>
        </div> */}

        <SignupForm />

        <p className="mt-4 md:mt-6 text-sm md:text-base">
          Already have an account?{' '}
          <Link
            href={'/login'}
            className="font-semibold text-link cursor-pointer"
          >
            Sing in
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Signup;
