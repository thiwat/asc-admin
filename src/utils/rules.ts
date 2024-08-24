import { t } from "./translate";

export const validateConfirmPassword = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error(t('info_invalid_password_not_match'))
    );
  },
})