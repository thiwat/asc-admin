import { Button, Modal, Typography } from "antd"
import { FileTextOutlined } from '@ant-design/icons'
import { TicketModalProps } from "./types"
import { useState } from "react"
import Image from "next/image"
import QRCode from "react-qr-code"
import { useToPng } from "@hugocxl/react-to-image"
import styles from './index.module.css'
import { CalendarOutlined, CompassOutlined } from '@ant-design/icons'

const TicketModal = ({
  data
}: TicketModalProps) => {

  const [open, setOpen] = useState<boolean>(false)

  const onToggleOpen = () => {
    setOpen(prev => !prev)
  }

  const [state, convert] = useToPng<HTMLDivElement>({
    selector: '#qrcode',
    onSuccess: res => {
      const link = document.createElement('a');
      link.href = res; // Assumes base64Image includes the data URI prefix
      link.download = `${data.code}.png`;
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
        onCancel={onToggleOpen}
        footer={false}
        centered
      >
        <div style={{ marginTop: 20, display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ borderRadius: 12, border: '1px solid #efefef', background: 'white' }} id={'qrcode'}>
            <Image
              src={'/images/header.jpeg'}
              width={400}
              height={180}
              alt={'banner'}
              style={{ objectFit: 'cover', borderTopRightRadius: 12, borderTopLeftRadius: 12 }}
            />
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 24, textAlign: 'center' }}>
              <div style={{ lineHeight: 1, marginBottom: 12, color: '#0059AF', fontSize: 30, fontWeight: '800', marginTop: 16 }} className={styles.customFont}>
                {'TALES OF THE SOUNDS'}
              </div>
              <QRCode
                value={data.code}
                size={172}
                style={{ marginTop: 12, marginBottom: 12 }}
              />
              <div style={{ width: 'fit-content', textAlign: 'left', paddingTop: 12, paddingBottom: 12, margin: '0px auto' }}>
                <div className={styles.customFont} style={{ fontSize: 12, marginBottom: 10, display: 'flex', alignItems: 'center' }}>
                  <CalendarOutlined width={32} height={32} style={{ marginRight: 10, fontSize: 18 }} />
                  {'Sunday October 5th, 2025, 2:00-3:30 pm.'}
                </div>
                <div className={styles.customFont} style={{ fontSize: 12, marginBottom: 10, display: 'flex', alignItems: 'center' }}>
                  <CompassOutlined size={20} style={{ marginRight: 10, fontSize: 18 }} />
                  {'Yamaha Music Hall, Siam Patumwan House, 5th fl.'}
                </div>
              </div>
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