import SvgLogoDesktop from '@/assets/svg/logo-signup-desktop.svg';
import Icon from '@/components/icon';

import AdminLoginForm from './admin-login.form';

const AdminLogin = () => {
  return (
    <main className="flex min-h-screen justify-center items-center md:py-24">
      <section className="flex flex-col items-center p-8 w-full md:w-[494px] md:border md:border-nature-800 md:rounded-2xl">
        <Icon>
          <SvgLogoDesktop className="md:block" />
        </Icon>

        <h3 className="mt-6 md:text-2xl font-nunito font-bold">
          Log in to the admin panel
        </h3>

        <AdminLoginForm />
      </section>
    </main>
  );
};

export default AdminLogin;
