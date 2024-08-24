import { getBase64FromFile } from '@/utils/file'
import { message } from 'antd'
import dynamic from 'next/dynamic'
import { useMemo, useRef } from 'react'
import { WysiwygEditorProps } from './types'

const JoditEditor = dynamic(() => import('jodit-react'), {
  ssr: false
})

const WysiwygEditor = ({
  value,
  disabled,
  onChange
}: WysiwygEditorProps) => {

  const firstTime = useRef<boolean>(true)

  const _onChange = (newValue: string) => {
    if (firstTime.current) {
      firstTime.current = false
      return
    }

    onChange && onChange(newValue)
  }

  const config = useMemo(() => {
    return {
      readonly: disabled,
      uploader: {
        url: '/api/attachment/upload',
        isSuccess: (res) => {
          return !!res?.url;
        },
        defaultHandlerSuccess: function (data, res) {
          this.s.insertImage(data.url)
        },
        buildData: async (data) => {
          const file = data.getAll('files[0]')[0]
          const uploadData = await getBase64FromFile(file)
          return {
            file_name: file.name,
            path: 'image',
            image_data: uploadData
          }
        },
        process: (res) => {
          return {
            url: res.url
          }
        },
        getMessage: (res) => {
          return res?.msg;
        },
        error: (e) => {
          message.error(e.message)
        },
      }
    }
  }, [disabled])


  return (
    <JoditEditor
      value={firstTime.current ? value : null}
      onChange={_onChange}
      config={config}
    />
  )
}

export default WysiwygEditor