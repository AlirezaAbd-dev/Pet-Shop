import SvgGoogleMobile from '@/assets/svg/google-mobile.svg';
import SvgLogoMobile from '@/assets/svg/logo-singup-mobile.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

import SvgEye from '@icons/eye-mobile.svg';

const Signup = () => {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <section className="flex flex-col items-center w-full px-5">
        <Icon>
          <SvgLogoMobile />
        </Icon>

        <h3 className="mt-6 font-nunito font-extrabold">Create your account</h3>
        <p className="mt-2 text-sm">Let’s get startred!</p>
        <Button className="w-full flex gap-2 bg-transparent border border-nature-800 mt-6 py-[11px] rounded-lg text-sm text-text-500 ">
          <Icon>
            <SvgGoogleMobile />
          </Icon>
          Continue with Google
        </Button>

        <div className="w-full flex gap-3 justify-between items-center mt-6">
          <div className="w-full border-t border-nature-800"></div>
          <p className="text-sm whitespace-nowrap">or continue with email</p>
          <div className="w-full border-t border-nature-800"></div>
        </div>

        <form className="w-full flex flex-col mt-6">
          <label className="text-sm">Full name</label>
          <Input className="mt-2" />
          <label className="text-sm">Email</label>
          <Input className="mt-2" />
          <label className="text-sm">Password</label>
          <div className="flex items-center bg-nature-600 mt-2 pr-3">
            <Input className="flex-1" />
            <Icon>
              <SvgEye className="w-6 h-6" />
            </Icon>
          </div>

          <div className="flex items-center w-full gap-2 mt-4">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-xs font-nunito  cursor-pointer"
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

          <Button className="mt-6 font-bold text-sm">Rigester</Button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{' '}
          <span className="font-semibold text-link">Sing in</span>
        </p>
      </section>
    </main>
  );
};

export default Signup;
