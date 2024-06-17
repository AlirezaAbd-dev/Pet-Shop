import SvgGoogleDesktop from '@/assets/svg/google-desktop.svg';
import SvgGoogleMobile from '@/assets/svg/google-mobile.svg';
import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import SvgLogoMobile from '@/assets/svg/logo-singup-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

import SvgCheckmarkCircle from '@icons/checkmark-circle-10.svg';
import SvgEyeDesktop from '@icons/eye-desktop.svg';
import SvgEye from '@icons/eye-mobile.svg';

const Signup = () => {
  return (
    <main className="flex min-h-screen justify-center items-center md:py-24">
      <section className="flex flex-col items-center px-5 md:w-[486px] md:border md:border-nature-800 md:rounded-2xl md:p-6">
        <Icon>
          <SvgLogoMobile className="md:hidden" />
          <SvgLogoDesktop className="hidden md:block" />
        </Icon>

        <h3 className="mt-6 md:mt-7 md:text-2xl font-nunito font-extrabold">
          Create your account
        </h3>
        <p className="mt-2 md:mt-3 text-sm md:text-lg">Let’s get startred!</p>

        <Button className="w-full flex gap-2 bg-transparent border border-nature-800 mt-6 md:mt-8 py-[11px] rounded-lg text-sm md:text-base font-normal md:font-normal text-text-500 hover:bg-transparent">
          <Icon>
            <SvgGoogleMobile className="md:hidden" />
            <SvgGoogleDesktop className="hidden md:block" />
          </Icon>
          Continue with Google
        </Button>

        <div className="w-full flex gap-3 justify-between items-center mt-6 md:mt-8">
          <div className="w-full border-t border-nature-800"></div>
          <p className="text-sm md:text-base whitespace-nowrap">
            or continue with email
          </p>
          <div className="w-full border-t border-nature-800"></div>
        </div>

        <form className="w-full flex flex-col mt-6 md:mt-8">
          <label className="text-sm md:text-base">Full name</label>
          <Input className="mt-2 md:mt-3" />
          <label className="text-sm md:text-base mt-4">Email</label>
          <Input className="mt-2 md:mt-3" />
          <label className="text-sm md:text-base mt-4">Password</label>
          <div className="flex items-center bg-nature-600 rounded-lg mt-2 md:mt-3 pr-3">
            <Input className="flex-1" />
            <Icon>
              <SvgEye className="md:hidden w-6 h-6" />
              <SvgEyeDesktop className="hidden md:block" />
            </Icon>
          </div>
          <div className="flex items-center gap-2 mt-3 md:mt-4">
            <Icon>
              <SvgCheckmarkCircle />
            </Icon>
            At least 8 characters
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-3">
            <Icon>
              <SvgCheckmarkCircle />
            </Icon>
            Letters and numbers
          </div>
          <div className="flex items-center w-full gap-2 mt-6">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-xs md:text-base font-nunito  cursor-pointer"
            >
              I agree to the{' '}
              <span className="underline decoration-text-100">
                Terms of Service{' '}
              </span>
              and the{' '}
              <span className="underline decoration-text-100">
                Privacy Policy.
              </span>
            </label>
          </div>

          <Button className="mt-6 md:mt-8 font-bold text-sm shadow-color-md md:text-base">
            Rigester
          </Button>
        </form>
        <p className="mt-4 md:mt-6 text-sm md:text-base">
          Already have an account?{' '}
          <span className="font-semibold text-link cursor-pointer">
            Sing in
          </span>
        </p>
      </section>
    </main>
  );
};

export default Signup;
