import _get from 'lodash/get'
import { Button, Upload, message, Modal } from "antd"
import { useEffect, useState } from "react";
import { t } from "@/utils/translate";
import styles from './index.module.css'
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
  EyeOutlined
} from '@ant-design/icons';
import { AttachmentProps } from './types';
import { convertToBase64 } from '@/utils/file'
import useAttachment from '@/hooks/useAttachment';

const Attachment = ({
  value,
  accept,
  disabled,
  onChange
}: AttachmentProps) => {
  const {
    checkLimitFileSize,
    getPreviewImage
  } = useAttachment()
  const [fileUrl, setFileUrl] = useState<unknown>(value);
  const [open, setOpen] = useState<boolean>(false)

  const _onChange = () => { }

  useEffect(() => {
    if (!fileUrl && value) {
      setFileUrl(value)
    }
  }, [value])

  const toggleModal = () => setOpen(prev => !prev)

  const _beforeUpload = (file) => {
    if (checkLimitFileSize(file.size)) {
      message.error(t('form_upload_invalid_size'))
      return Upload.LIST_IGNORE
    }

    convertToBase64(file, imageUrl => {
      setFileUrl({
        name: file.name,
        data: imageUrl
      })
      file['image_data'] = imageUrl
      onChange(file)
    })
    return false
  }

  const _onLoadImgError = (event) => {
    const fileName = fileUrl?.['name'] || fileUrl
    const extension = fileName?.split('.').pop()
    event.target.src = getPreviewImage(extension)
  }

  const uploadButton = (
    <div>
      <PlusCircleOutlined className={styles.icon} />
      <div className={styles.uploadText}>{t('form_button_upload')}</div>
    </div>
  );

  const _stopEvent = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const _onDelete = (e) => {
    _stopEvent(e)
    setFileUrl(null)
    onChange(null)
  }

  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={_beforeUpload}
        onChange={_onChange}
        disabled={disabled}
        accept={accept}
      >
        {fileUrl
          ? <div className={styles.container}>
            <img
              src={
                _get(fileUrl, 'data') as string
                || _get(fileUrl, 'image_data') as string
                || fileUrl as string
              }
              alt="avatar"
              onError={_onLoadImgError}
              className={styles.img}
              onClick={_stopEvent}
            />
            <div className={styles.overlay}>
              <DeleteOutlined
                onClick={disabled ? null : _onDelete}
                className={`${styles.delIcon} ${styles.icon}`}
              />
              {disabled
                ? <Button
                  onClick={toggleModal}
                  type='text'
                  icon={
                    <EyeOutlined
                      className={`${styles.editIcon} ${styles.icon}`}
                    />
                  }
                />
                : <Button
                  type='text'
                  icon={
                    <EditOutlined
                      className={`${styles.editIcon} ${styles.icon}`}
                    />
                  }
                />
              }
            </div>
          </div>
          : uploadButton
        }
      </Upload>
      <Modal visible={open} onCancel={toggleModal} footer={null}>
        <img
          src={
            _get(fileUrl, 'data') as string
            || _get(fileUrl, 'image_data') as string
            || fileUrl as string
          }
          className={styles.previewImg}
        />
      </Modal>
    </>
  )
}

export default Attachment