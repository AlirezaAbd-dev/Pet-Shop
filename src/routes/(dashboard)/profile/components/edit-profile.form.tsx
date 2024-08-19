import { zodResolver } from '@hookform/resolvers/zod';
import { PenBox } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import SvgSingleUserRed20 from '@/assets/svg/single-user-red-20.svg';
import SvgSingleUserRed24 from '@/assets/svg/single-user-red-24.svg';
import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProfileType } from '@/hooks/react-query/queries/profile.query';
import { AddressResponse } from '@/routes/checkout/queries/addresses.query';
import useEditAddressMutation from '@/routes/checkout/queries/edit-address.mutation';

import { useDashboardModalsStore } from '../../_store/dashboard-modals.store';
import useEditProfileMutation from '../edit-profile.mutation';
import {
  ProfileValidationType,
  profileValidation,
} from '../profile.validation';

type EditProfileFormProps = {
  profile: ProfileType;
  addresses: AddressResponse[];
};

const EditProfileForm = (props: EditProfileFormProps) => {
  // const setIsEditEmailModalOpen = useDashboardModalsStore(
  //   (s) => s.setIsEditEmailModalOpen,
  // );
  const { mutateAsync: editAddress, isPending: isAddressPending } =
    useEditAddressMutation();
  const { mutateAsync: editProfile, isPending: isProfilePending } =
    useEditProfileMutation();

  const { control, handleSubmit } = useForm<ProfileValidationType>({
    resolver: zodResolver(profileValidation),
    defaultValues: {
      city: props.addresses[0].city,
      country: props.addresses[0].country,
      county: props.addresses[0].county,
      postCode: props.addresses[0].post_code,
      street: props.addresses[0].street,
      fullName: props.profile.full_name,
      phone: props.addresses[0].phone_number,
    },
  });

  const setIsChangePasswordModalOpen = useDashboardModalsStore(
    (s) => s.setIsChangePasswordModalOpen,
  );

  const submitHandler = async (values: ProfileValidationType) => {
    try {
      const formData = new FormData();
      formData.append('full_name', values.fullName);
      await editProfile(formData);
      await editAddress({
        city: values.city,
        country: values.country,
        county: values.county,
        phone_number: values.phone,
        post_code: values.postCode,
        street: values.street,
        ...(!!props.addresses[0] ? { id: props.addresses[0].id } : {}),
      });

      toast.success('profile and address successfully changed');
    } catch (err: any) {
      toast.error(err.response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="border border-nature-900 rounded-2xl mt-8 md:mt-0 py-4 md:py-6"
    >
      <div className="flex items-center gap-2 md:gap-3 px-4 md:px-6 font-nunito font-bold md:text-xl">
        <Icon className="flex justify-center items-center w-9 h-9 md:w-[42px] md:h-[42px] rounded-lg bg-primary-50/5">
          <SvgSingleUserRed20 className="md:hidden" />
          <SvgSingleUserRed24 className="hidden md:block" />
        </Icon>
        Saved
      </div>
      <div className="flex items-center gap-2 px-4 md:px-6 mt-6">
        <span className="w-[9px] h-[9px] bg-primary-500 rounded-[50px]" />
        <p className="font-nunito font-bold text-sm md:text-lg">
          Profile information
        </p>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8 mt-6 px-4 gap-5 md:px-6">
        <div>
          <label className="text-sm md:text-base">Full name</label>
          <Controller
            control={control}
            name="fullName"
            render={({ field, fieldState }) => (
              <Input
                className="mt-3"
                {...field}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </div>
        <div>
          <label className="text-sm md:text-base">Email</label>
          <div className="flex items-center mt-3 gap-3 rounded-xl bg-nature-600 pr-4">
            <Input readOnly disabled value={props.profile.email} />
            {/* <PenBox
              onClick={() => setIsEditEmailModalOpen(true)}
              className="text-secondary-300 w-5 h-5 cursor-pointer"
            /> */}
          </div>
        </div>
        <div>
          <label className="text-sm md:text-base">Phone</label>
          <Controller
            control={control}
            name="phone"
            render={({ field, fieldState }) => (
              <Input
                className="hide-arrows mt-3"
                type="number"
                {...field}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </div>
        <div>
          <label className="text-sm md:text-base">Password</label>
          <div className="flex items-center mt-3 gap-3 rounded-xl bg-nature-600 pr-4">
            <Input readOnly value={'********'} />
            <PenBox
              onClick={() => {
                setIsChangePasswordModalOpen(true);
              }}
              className="text-secondary-300 w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-8 border-b border-nature-900 mx-4 md:mx-6"></div>

      <div className="flex items-center gap-2 px-4 md:px-6 mt-6 md:mt-8">
        <span className="w-[9px] h-[9px] bg-primary-500 rounded-[50px]" />
        <p className="font-nunito font-bold text-sm md:text-lg">
          Address information
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8  mt-6 px-4 gap-5 md:px-6">
        <div>
          <label className="text-sm md:text-base">Country / Region</label>
          <Controller
            control={control}
            name="country"
            render={({ field, fieldState }) => (
              <Input
                className="mt-3"
                {...field}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </div>
        <div>
          <label className="text-sm md:text-base">County</label>
          <Controller
            control={control}
            name="county"
            render={({ field, fieldState }) => (
              <Input
                className="mt-3"
                {...field}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </div>
        <div>
          <label className="text-sm md:text-base">Street address</label>
          <Controller
            control={control}
            name="street"
            render={({ field, fieldState }) => (
              <Input
                className="mt-3"
                {...field}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </div>
        <div>
          <label className="text-sm md:text-base">Town / City</label>
          <Controller
            control={control}
            name="city"
            render={({ field, fieldState }) => (
              <Input
                className="mt-3"
                {...field}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </div>
        <div>
          <label className="text-sm md:text-base">Postcode</label>
          <Controller
            control={control}
            name="postCode"
            render={({ field, fieldState }) => (
              <Input
                className="hide-arrows mt-3"
                type="number"
                {...field}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </div>
      </div>

      <div className="px-4 md:px-6 mt-6 md:mt-10">
        <Button
          isLoading={isAddressPending || isProfilePending}
          variant={
            isAddressPending || isProfilePending ? 'disabled' : 'default'
          }
          disabled={isAddressPending || isProfilePending}
          className="w-full md:w-[232px] rounded-xl font-bold text-sm md:text-base"
        >
          Confirmation
        </Button>
      </div>
    </form>
  );
};

export default EditProfileForm;
