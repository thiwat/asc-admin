import _get from 'lodash/get'
import useDashboard from '@/services/dashboard'
import { Col, Row, Select } from 'antd'
import SummaryBox from '../SummaryBox'
import { t } from '@/utils/translate'
import styles from './index.module.css'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { UserOutlined, GiftOutlined, ProfileOutlined } from '@ant-design/icons'
import SummaryList from '../SummaryList'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
)

const Dashboard = () => {

  const {
    data,
    coupons,
    period,
    graph,
    incomeGraph,
    loading,
    getLabel,
    getIncomeLabel,
    onChangePeriod
  } = useDashboard({})

  if (loading) return null

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24} className={styles.dateSearch}>
          <Select
            value={period}
            onChange={onChangePeriod}
            options={[
              { label: t('dashboard_period_1'), value: 1 },
              { label: t('dashboard_period_2'), value: 2 },
              { label: t('dashboard_period_7'), value: 7 },
              { label: t('dashboard_period_30'), value: 30 },
              { label: t('dashboard_period_60'), value: 60 },
              { label: t('dashboard_period_90'), value: 90 },
              { label: t('dashboard_period_180'), value: 180 },
            ]}
          />
        </Col>
        <Col span={8}>
          <SummaryBox
            color={'#9BBC4E'}
            icon={<UserOutlined style={{ fontSize: 22, color: '#efefef' }} />}
            value={_get(data, 'users.login', 0)}
            title={t('dashboard_user_login')}
          />
        </Col>
        <Col span={8}>
          <SummaryBox
            color={'#202B4B'}
            icon={<ProfileOutlined style={{ fontSize: 22, color: '#efefef' }} />}
            value={_get(data, 'users.register', 0)}
            title={t('dashboard_user_register')}
          />
        </Col>
        <Col span={8}>
          <SummaryBox
            color={'#BE0032'}
            icon={<GiftOutlined style={{ fontSize: 22, color: '#efefef' }} />}
            value={_get(data, 'users.update_package', 0)}
            title={t('dashboard_user_update_package')}
          />
        </Col>
        <Col span={24}>
          <div className={styles.container}>
            <div className={styles.title}>
              {t('dashboard_inheritance_graph_title')}
            </div>
            <div>
              <Bar
                height={350}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false
                    }
                  },
                  responsive: true,
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        callback: getLabel
                      }
                    },
                  },
                }}
                data={graph}
              />
            </div>
          </div>
        </Col>
        <Col span={16}>
          <div className={styles.container}>
            <div className={styles.title}>
              {t('dashboard_income_graph_title')}
            </div>
            <div>
              <Bar
                height={300}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false
                    }
                  },
                  responsive: true,
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        callback: getIncomeLabel
                      }
                    },
                  },
                }}
                data={incomeGraph}
              />
            </div>
          </div>
        </Col>
        <Col span={8}>
          <SummaryList
            title={t('dashboard_coupons_summary')}
            value={coupons}
            columns={[
              { label: t('dashboard_coupon'), key: '${ coupon_name } (${ coupon_code })' },
              { label: t('dashboard_amount'), key: '${ count }' },
            ]}
          />
        </Col>
      </Row>
    </>
  )
}

export default Dashboard