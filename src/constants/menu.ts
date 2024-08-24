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
    label: 'menu_customers',
    key: '/customer',
    icon: 'UserOutlined',
    roles: [Roles.admin]
  },
  {
    label: 'menu_contents',
    key: '/content',
    icon: 'GroupOutlined',
    roles: [Roles.admin],
    children: [
      {
        label: 'menu_cms_block',
        key: '/content/cms_block'
      },
      {
        label: 'menu_cms_page',
        key: '/content/cms_page',
      },
      {
        label: 'menu_notification_template',
        key: '/content/notification_template',
      },
    ]
  },
  {
    label: 'menu_staffs',
    key: '/staff',
    icon: 'TeamOutlined',
    roles: [Roles.admin],
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
        label: 'menu_settings_site',
        key: '/settings/site'
      },
      {
        label: 'menu_settings_gateway',
        key: '/settings/gateway'
      },
      {
        label: 'menu_settings_order',
        key: '/settings/order'
      },
      {
        label: 'menu_settings_translates',
        key: '/settings/translates'
      }
    ]
  }
]