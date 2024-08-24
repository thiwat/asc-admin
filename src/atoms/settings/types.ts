type RecaptchaSetting = {
  enabled: boolean;
  site_key: string;
}

type SiteSetting = {
  primary_color: string;
}

export type Settings = {
  recaptcha?: RecaptchaSetting;
  site?: SiteSetting;
}