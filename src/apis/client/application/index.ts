import { request } from "../request"
import { RevokeSecretProps } from "./types"

export const requestRevokeSecret = ({ code }: RevokeSecretProps): Promise<unknown> => {
  return request('application/revoke', 'PATCH', { code })
}