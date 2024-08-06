import { create } from 'zustand';
import { UserAiContentType } from '../db/schema';

export type UserAiContentState = {
  userAiContent: UserAiContentType[] | [];
  hasLoaded: boolean;
};

export type UserAiContentActions = {
  setUserAiContents: (_newData: UserAiContentType[]) => void;
  addUserAiContents: (_newData: UserAiContentType) => void;
};

export type UserAiContentStore = UserAiContentState & UserAiContentActions;

export const useUserAiContent = create<UserAiContentStore>((set) => ({
  userAiContent: [],
  hasLoaded: false,
  setUserAiContents: (newData) =>
    set({ userAiContent: newData, hasLoaded: true }),
  addUserAiContents: (newData) =>
    set((state) => ({
      userAiContent: [newData, ...state.userAiContent],
      hasLoaded: true,
    })),
}));
