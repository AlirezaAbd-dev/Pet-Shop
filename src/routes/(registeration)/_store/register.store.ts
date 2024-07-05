import { create } from 'zustand';

type SignupPageType = 'signup' | 'enter-code';

type UseRegisterStoreType = {
  signupEmail?: string;
  setSignupEmail: (email?: string) => void;
  signupPage: SignupPageType;
  setSignupPage: (page: SignupPageType) => void;
};

export const useRegisterStore = create<UseRegisterStoreType>()((set) => ({
  setSignupEmail(email) {
    set({ signupEmail: email });
  },
  signupPage: 'signup',
  setSignupPage(page) {
    set({ signupPage: page });
  },
}));
