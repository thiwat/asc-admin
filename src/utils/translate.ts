import _template from 'lodash/template'

let TRANSLATES: object = {
  login_title: 'Welcome',
  login_username: 'Username',
  login_password: 'Password',
  login_button_submit: 'Submit',
  info_required_field: 'Please fill in this field',
  menu_dashboard: 'Dashboard',
  menu_orders: 'Orders',
  menu_settings: 'Settings',
  menu_settings_application: 'Applications',
  menu_settings_attachment: 'Attachment',
  menu_settings_order: 'Order',
  role_admin: 'Admin',
  common_logout: 'Logout',
  order_order_no: 'Order No',
  order_user_email: 'Email',
  order_user_mobile_no: 'Mobile No',
  order_status: 'Status',
  order_status_paid: 'Paid',
  order_status_completed: 'Completed',
  order_total_amount: 'Total Amount',
  order_order_date: 'Order Date',
  common_create_at: 'Created at : ${ time }',
  common_update_at: 'Updated at : ${ time }',
  order_general_information: 'General Information',
  order_slip_url: 'Slip url',
  order_player_information: 'Player Information',
  player_name: 'Name',
  player_nickname: 'Nickname',
  order_tickets_information: 'Tickets',
  ticket_code: 'Code',
  ticket_status: 'Status'
}

export const t = (key: string, data?: unknown): string => {
  return _template(TRANSLATES[key] || key)(data)
}

export const setTranslate = (translate: object) => {
  TRANSLATES = translate
}