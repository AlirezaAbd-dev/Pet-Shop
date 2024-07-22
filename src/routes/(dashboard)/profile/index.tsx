'use client';

import Link from 'next/link';

import SvgLongArrow20 from '@/assets/svg/long-arrow-20.svg';
import LoadingSpinner from '@/components/ui/loading-spinner';
import useProfileQuery from '@/hooks/react-query/queries/profile.query';
import useAdressesQuery from '@/routes/checkout/queries/addresses.query';

import EditProfileForm from './components/edit-profile.form';
import ChangePasswordModal from './components/modals/change-password.modal';

// import EditEmailModal from './components/modals/edit-email/edit-email.modal';

const Profile = () => {
  const { data: profile, isPending: isProfilePending } = useProfileQuery();
  const { data: addresses, isPending: isAddressesPending } = useAdressesQuery();

  if (isProfilePending || isAddressesPending)
    return <LoadingSpinner className="mt-20" />;

  if (profile && addresses)
    return (
      <>
        {/* <EditEmailModal /> */}
        <ChangePasswordModal />
        <Link
          href={'/dashboard/main'}
          className="md:hidden flex gap-1 items-center "
        >
          <SvgLongArrow20 />
          Profile
        </Link>
        <EditProfileForm addresses={addresses} profile={profile?.data} />
      </>
    );
};

export default Profile;
