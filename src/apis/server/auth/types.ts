export type AuthInput = {
  username: string;
  password: string;
  app_key?: string;
  secret_key?: string;
}

export type AuthRevokeInput = {
  token: string;
}