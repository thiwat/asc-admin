import { ALL_LANGUAGES } from "@/constants/language"
import { SITES } from "@/constants/site"
import { Tabs } from "antd"
import { useState } from "react"
import styles from './index.module.css'
import LanguageItem from "./LanguageItem"
import TranslateSection from "./TranslateSection"

const SettingTranslate = () => {

  const [active, setActive] = useState<string>('en-US')

  const onChange = (code: string) => {
    return setActive(code)
  }

  return (
    <div className={styles.container}>
      <div className={styles.languageContainer}>
        {ALL_LANGUAGES.map(i => (
          <LanguageItem
            name={i.name}
            code={i.code}
            icon={i.icon}
            key={i.code}
            isActive={i.code === active}
            onClick={onChange}
          />
        ))}
      </div>
      <div className={styles.tabContainer}>
        <Tabs
          items={SITES.map(i => ({
            label: i.label,
            key: i.code,
            children: <TranslateSection
              locale={active}
              site={i.code}
            />
          }))}
        />
      </div>
    </div>
  )
}

export default SettingTranslate