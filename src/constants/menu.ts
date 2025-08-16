import { Roles } from "@/enums/role";

type MenuChildren = {
  label: string;
  key: string;
  roles?: Roles[];
}

type MenuItem = {
  label: string;
  key: string;
  icon: string;
  roles?: Roles[];
  children?: MenuChildren[];
}

export const MENU: MenuItem[] = [
  {
    label: 'menu_dashboard',
    key: '/',
    icon: 'HomeOutlined'
  },
  {
    label: 'menu_orders',
    key: '/order',
    icon: 'SolutionOutlined',
    roles: [Roles.admin]
  },
  {
    label: 'menu_settings',
    key: '/settings',
    icon: 'SettingOutlined',
    roles: [Roles.admin],
    children: [
      {
        label: 'menu_settings_application',
        key: '/settings/application'
      },
      {
        label: 'menu_settings_attachment',
        key: '/settings/attachment'
      },
      {
        label: 'menu_settings_order',
        key: '/settings/order'
      },
    ]
  }
]