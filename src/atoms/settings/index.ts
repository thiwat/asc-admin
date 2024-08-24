import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from "recoil";
import { Settings } from "./types";

export const settingsAtom = atom<Settings>({
  key: 'SETTINGS_ATOM',
  default: {}
})

export const useSettingsState = () => useRecoilState(settingsAtom)

export const useSettingsStateValue = () => useRecoilValue(settingsAtom)

export const useSetSettingsState = () => useSetRecoilState(settingsAtom)