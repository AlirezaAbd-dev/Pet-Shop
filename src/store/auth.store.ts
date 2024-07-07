import { create } from 'zustand';

import { ProfileType } from '@/hooks/react-query/queries/profile.query';

type UseAuthStoreType = {
  profile?: ProfileType;
  setProfile: (profile?: ProfileType) => void;
  accesstoken?: string;
  setAccessToken: (token?: string) => void;
};

export const useAuthStore = create<UseAuthStoreType>()((set) => ({
  setProfile(profile) {
    set({ profile });
  },
  setAccessToken(token) {
    set({ accesstoken: token });
  },
}));
