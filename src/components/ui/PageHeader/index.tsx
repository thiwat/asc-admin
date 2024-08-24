import _isEmpty from 'lodash/isEmpty'
import { PageHeaderProps } from "./types"
import styles from './index.module.css'
import { Row, Space, Tag } from "antd"
import React from "react"

const PageHeader = ({
  title,
  badge,
  extra
}: PageHeaderProps) => {
  return (
    <>
      <Row
        justify={'space-between'}
        align={'middle'}
        className={styles.header}
      >
        <>
          <h1 className={styles.title}>
            {title}
            {!_isEmpty(badge) &&
              <Tag color={badge.color} className={styles.badge}>
                {badge.label}
              </Tag>
            }
          </h1>

        </>
        {extra?.length > 0 &&
          <Space>
            {extra.map((i, index) => (
              <React.Fragment key={`extra-${index}`}>
                {i}
              </React.Fragment>
            ))}
          </Space>
        }
      </Row>
    </>
  )
}

export default PageHeader