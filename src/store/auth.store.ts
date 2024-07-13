import { create } from 'zustand';

import { ProfileType } from '@/hooks/react-query/queries/profile.query';

type UseAuthStoreType = {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  profile?: ProfileType;
  setProfile: (profile?: ProfileType) => void;
  accesstoken?: string;
  setAccessToken: (token?: string) => void;
};

export const useAuthStore = create<UseAuthStoreType>()((set) => ({
  isLoading: true,
  setIsLoading(isLoading) {
    set({ isLoading });
  },
  setProfile(profile) {
    set({ profile });
  },
  setAccessToken(token) {
    set({ accesstoken: token });
  },
}));
