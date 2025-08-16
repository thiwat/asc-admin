import { Button, Modal, Typography } from "antd"
import { FileTextOutlined } from '@ant-design/icons'
import { TicketModalProps } from "./types"
import { useState } from "react"
import Image from "next/image"
import QRCode from "react-qr-code"
import { useToPng } from "@hugocxl/react-to-image"
import { t } from "@/utils/translate"

const TicketModal = ({
  data
}: TicketModalProps) => {

  const [open, setOpen] = useState<boolean>(false)

  const onToggleOpen = () => {
    setOpen(prev => !prev)
  }

  const [state, convert] = useToPng<HTMLDivElement>({
    selector: '#qrcode',
    onSuccess: data => {
      const link = document.createElement('a');
      link.href = data; // Assumes base64Image includes the data URI prefix
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  })

  return (
    <>
      <Button icon={<FileTextOutlined />} onClick={onToggleOpen} />
      <Modal
        open={open}
        onClose={onToggleOpen}
        onCancel={onToggleOpen}
        footer={false}
        centered
      >
        <div style={{ marginTop: 20, display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ borderRadius: 12, border: '1px solid #efefef', background: 'white' }} id={'qrcode'}>
            <Image
              src={'/images/header.jpeg'}
              width={300}
              height={120}
              alt={'banner'}
              style={{ objectFit: 'cover', borderTopRightRadius: 12, borderTopLeftRadius: 12 }}
            />
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 24, textAlign: 'center' }}>
              <Typography.Title level={3} style={{ lineHeight: 1, marginBottom: 12, color: '#0059AF' }}>
                {'Tales of the Sounds'}
              </Typography.Title>
              <QRCode
                value={data.code}
                size={172}
                style={{ marginTop: 12 }}
              />
            </div>
          </div>
          <div>
            <Button type={'primary'} onClick={convert} style={{ marginTop: 24 }}>
              {'Save QR Code'}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default TicketModal