import _get from 'lodash/get'
import SettingForm from "@/components/ui/Setting"
import { DetailItemType } from "@/enums/detail"
import { SectionProps } from "@/types/detail"
import { AttachmentAwsS3ACL, AttachmentAwsS3AuthenType, AttachmentAwsS3Region, AttachmentFileExtension, AttachmentProvider } from '@/enums/attachment'

const SettingAttachmentPage = () => {
  return (
    <SettingForm
      name={'attachment'}
      sections={SECTIONS}
    />
  )
}

const SECTIONS: SectionProps[] = [
  {
    title: 'setting_attachment_general',
    fields: [
      {
        name: 'default_provider',
        label: 'setting_attachment_default_provider',
        type: DetailItemType.select,
        options: {
          options: Object.keys(AttachmentProvider)
            .map(i => ({
              label: `setting_attachment_provider_${i}`,
              value: i
            })),
        },
        required: true
      },
      {
        type: DetailItemType.space
      },
      {
        name: 'limit_file_size',
        label: 'setting_attachment_limit_file_size',
        type: DetailItemType.number,
        required: true,
      },
      {
        name: 'allow_extension_file',
        label: 'setting_attachment_allow_extension_file',
        type: DetailItemType.select,
        required: true,
        options: {
          mode: 'multiple',
          options: Object.keys(AttachmentFileExtension)
            .map(i => ({
              label: i,
              value: i
            }))
        }
      },
    ]
  },
  {
    title: 'setting_attachment_aws_s3',
    fields: [
      {
        name: ['aws_s3', 'authen_type'],
        label: 'setting_attachment_aws_s3_authen_type',
        type: DetailItemType.select,
        dependenciesFields: ['default_provider'],
        required: ({ values }) => _get(values, 'default_provider') === AttachmentProvider.aws_s3,
        options: {
          options: Object.keys(AttachmentAwsS3AuthenType)
            .map(i => ({
              label: `setting_attachment_aws_s3_authen_type_${i}`,
              value: i
            }))
        }
      },
      {
        type: DetailItemType.space
      },
      {
        name: ['aws_s3', 'access_key'],
        label: 'setting_attachment_aws_s3_access_key',
        type: DetailItemType.string,
        dependenciesFields: ['aws_s3.authen_type', 'default_provider'],
        required: ({ values }) => _get(values, 'default_provider') === AttachmentProvider.aws_s3,
        hidden: ({ values }) => _get(values, 'aws_s3.authen_type') !== AttachmentAwsS3AuthenType.access_key
      },
      {
        name: ['aws_s3', 'secret_key'],
        label: 'setting_attachment_aws_s3_secret_key',
        type: DetailItemType.password,
        dependenciesFields: ['aws_s3.authen_type', 'default_provider'],
        required: ({ values }) => _get(values, 'default_provider') === AttachmentProvider.aws_s3,
        hidden: ({ values }) => _get(values, 'aws_s3.authen_type') !== AttachmentAwsS3AuthenType.access_key
      },

      {
        name: ['aws_s3', 'region'],
        label: 'setting_attachment_aws_s3_region',
        type: DetailItemType.select,
        dependenciesFields: ['aws_s3.authen_type', 'default_provider'],
        required: ({ values }) => _get(values, 'default_provider') === AttachmentProvider.aws_s3,
        hidden: ({ values }) => _get(values, 'aws_s3.authen_type') !== AttachmentAwsS3AuthenType.access_key,
        options: {
          options: AttachmentAwsS3Region
            .map(i => ({
              label: i,
              value: i
            }))
        }
      },
      {
        name: ['aws_s3', 'acl'],
        label: 'setting_attachment_aws_s3_acl',
        type: DetailItemType.select,
        dependenciesFields: ['aws_s3.authen_type', 'default_provider'],
        required: ({ values }) => _get(values, 'default_provider') === AttachmentProvider.aws_s3,
        hidden: ({ values }) => _get(values, 'aws_s3.authen_type') !== AttachmentAwsS3AuthenType.access_key,
        options: {
          options: AttachmentAwsS3ACL
            .map(i => ({
              label: i,
              value: i
            }))
        }
      },

      {
        name: ['aws_s3', 'bucket'],
        label: 'setting_attachment_aws_s3_bucket',
        type: DetailItemType.string,
        dependenciesFields: ['aws_s3.authen_type', 'default_provider'],
        required: ({ values }) => _get(values, 'default_provider') === AttachmentProvider.aws_s3,
        hidden: ({ values }) => _get(values, 'aws_s3.authen_type') !== AttachmentAwsS3AuthenType.access_key
      },
      {
        name: ['aws_s3', 'path'],
        label: 'setting_attachment_aws_s3_path',
        type: DetailItemType.string,
        dependenciesFields: ['aws_s3.authen_type', 'default_provider'],
        required: ({ values }) => _get(values, 'default_provider') === AttachmentProvider.aws_s3,
        hidden: ({ values }) => _get(values, 'aws_s3.authen_type') !== AttachmentAwsS3AuthenType.access_key
      },
      {
        name: ['aws_s3', 'custom_domain'],
        label: 'setting_attachment_aws_s3_custom_domain',
        type: DetailItemType.string,
        dependenciesFields: ['aws_s3.authen_type', 'default_provider'],
      },
    ]
  },
  {
    title: 'setting_attachment_google_drive',
    fields: [
      {
        name: ['google_drive', 'credentials'],
        label: 'setting_attachment_google_drive_credentials',
        type: DetailItemType.json,
        dependenciesFields: ['default_provider'],
        required: ({ values }) => _get(values, 'default_provider') === AttachmentProvider.google_drive,
      },
      {
        name: ['google_drive', 'path'],
        label: 'setting_attachment_google_drive_path',
        type: DetailItemType.string,
        dependenciesFields: ['default_provider'],
        required: ({ values }) => _get(values, 'default_provider') === AttachmentProvider.google_drive,
      }
    ]
  }
]

export default SettingAttachmentPage