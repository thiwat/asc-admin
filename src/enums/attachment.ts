export enum AttachmentProvider {
  aws_s3 = 'aws_s3'
}

export enum AttachmentFileExtension {
  png = 'png',
  jpg = 'jpg',
  jpeg = 'jpeg',
}

export enum AttachmentAwsS3AuthenType {
  none = 'none',
  access_key = 'access_key'
}

export const AttachmentAwsS3Region = [
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "us-west-2",
  "af-south-1",
  "ap-east-1",
  "ap-south-1",
  "ap-northeast-3",
  "ap-northeast-2",
  "ap-southeast-1",
  "ap-southeast-2",
  "ap-northeast-1",
  "ca-central-1",
  "eu-central-1",
  "eu-west-1",
  "eu-west-2",
  "eu-south-1",
  "eu-west-3",
  "eu-north-1",
  "me-south-1",
  "sa-east-1"
]

export const AttachmentAwsS3ACL = [
  "private",
  "public-read",
  "public-read-write",
  "aws-exec-read",
  "authenticated-read",
  "bucket-owner-read",
  "bucket-owner-full-control",
  "log-delivery-write"
]