import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from "recoil";
import { Profile } from "./types";

export const profileAtom = atom<Profile>({
  key: 'PROFILE_ATOM',
  default: {}
})

export const useProfileState = () => useRecoilState(profileAtom)

export const useProfileStateValue = () => useRecoilValue(profileAtom)

export const useSetProfileState = () => useSetRecoilState(profileAtom)