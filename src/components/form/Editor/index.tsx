import React from 'react'
import { EditorProps } from './types'


const AceEditor = (props) => {
  if (typeof window !== 'undefined') {

    const Ace = require('react-ace').default
    require('../../../../node_modules/ace-builds/src-noconflict/ext-beautify')
    require('../../../../node_modules/ace-builds/src-min-noconflict/mode-html')
    require('../../../../node_modules/ace-builds/src-min-noconflict/mode-json')
    require('../../../../node_modules/ace-builds/src-min-noconflict/theme-tomorrow')
    require('../../../../node_modules/ace-builds/src-min-noconflict/ext-language_tools')
    const ace = require('../../../../node_modules/ace-builds/src-noconflict/ace')
    ace.config.set('basePath', 'https://cdn.jsdelivr.net/npm/ace-builds@1.4.7/src-noconflict/')
    ace.config.setModuleUrl('ace/mode/javascript_worker', 'https://cdn.jsdelivr.net/npm/ace-builds@1.4.7/src-noconflict/worker-javascript.js')

    return <Ace {...props} />
  }
  return null
}


const Editor = ({
  mode = 'json',
  value,
  onChange,
  disabled,
  height
}: EditorProps) => {

  return (
    <AceEditor
      disabled={disabled}
      mode={mode}
      value={value || ''}
      theme={'tomorrow'}
      onChange={onChange}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      height={height || '200px'}
      style={{ width: '100%' }}
    />
  )
}

export default Editor