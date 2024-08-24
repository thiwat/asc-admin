import _template from 'lodash/template'
import _get from 'lodash/get'
import { SummaryListProps } from "./types"
import styles from './index.module.css'

const SummaryList = ({
  title,
  value,
  columns
}: SummaryListProps) => {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {title}
      </div>
      {(value || []).map((i, index) => (

        <div key={`item-${index}`} className={styles.row}>
          {columns.map(j => (
            <div key={j.key}>
              {_template(j.key)(i)}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SummaryList