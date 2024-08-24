import { useSettingsStateValue } from "@/atoms/settings"
import { PRIMARY_COLOR } from "@/constants/colors"

const useTheme = () => {

  const setting = useSettingsStateValue()

  return {
    primary_color: setting?.site?.primary_color || PRIMARY_COLOR
  }
}

export default useTheme