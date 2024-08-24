import _get from 'lodash/get'
import SettingForm from "@/components/ui/Setting"
import { DetailItemType } from "@/enums/detail"
import { SectionProps } from "@/types/detail"

const SettingSitePage = () => {
  return (
    <SettingForm
      name={'site'}
      sections={SECTIONS}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'setting_admin_site',
    fields: [
      {
        name: ['admin', 'primary_color'],
        label: 'setting_site_admin_primary_color',
        type: DetailItemType.color_picker,
        required: true,
      },
    ]
  },
  {
    title: 'setting_site',
    fields: [
      {
        name: ['site', 'primary_color'],
        label: 'setting_site_site_primary_color',
        type: DetailItemType.color_picker,
        required: true,
      },
      {
        name: ['site', 'secondary_color'],
        label: 'setting_site_site_secondary_color',
        type: DetailItemType.color_picker,
        required: true,
      }
    ]
  },
  {
    title: 'setting_meta_data',
    fields: [
      {
        name: ['site', 'meta_data', 'meta_title'],
        label: 'setting_site_meta_title',
        type: DetailItemType.string,
      },
      {
        name: ['site', 'meta_data', 'meta_description'],
        label: 'setting_site_meta_description',
        type: DetailItemType.string,
      },
      {
        name: ['site', 'meta_data', 'meta_keywords'],
        label: 'setting_site_meta_keywords',
        type: DetailItemType.string,
      },
    ]
  }
]

export default SettingSitePage