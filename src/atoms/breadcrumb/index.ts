import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from "recoil";

export const breadcrumbAtom = atom<string>({
  key: 'BREADCRUMB_ATOM',
  default: ''
})

export const useBreadcrumbState = () => useRecoilState(breadcrumbAtom)

export const useBreadcrumbStateValue = () => useRecoilValue(breadcrumbAtom)

export const useSetBreadcrumbState = () => useSetRecoilState(breadcrumbAtom)