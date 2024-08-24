import '../../public/styles/index.css'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head';
import _get from 'lodash/get'
import Layout from '../components/layout';
import { ConfigProvider } from 'antd';
import { RecoilRoot } from 'recoil';
import { requestMyProfile } from '@/apis/server/auth';
import { profileAtom } from '@/atoms/profile';
import { useRouter } from 'next/router';
import { requestSiteSetting } from '@/apis/server/system';
import { settingsAtom } from '@/atoms/settings';
import { PRIMARY_COLOR } from '@/constants/colors';
import { requestGetTranslate } from '@/apis/server/setting';
import { setTranslate } from '@/utils/translate';
import { COOKIE_OPTIONS } from '@/constants/cookies';

const NOT_REQUIRE_AUTH = ["/login", '/forgot_password'];

const MyApp = ({ Component, pageProps }) => {

  const siteSetting = useRef<any>({})
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    initialData()
  }, [])

  const initialData = () => {
    if (pageProps.cookies) {
      COOKIE_OPTIONS.sameSite = pageProps.cookies.sameSite
      COOKIE_OPTIONS.secure = pageProps.cookies.secure
    }

    if (pageProps.settings) {
      siteSetting.current = pageProps.settings
    }

    if (pageProps.translates) {
      setTranslate(pageProps.translates)
    }

    if (pageProps?.token && NOT_REQUIRE_AUTH.includes(router.pathname)) {
      return router.push('/').then(() => setTimeout(() => setLoading(false), 500))
    }

    if (!pageProps?.token && !NOT_REQUIRE_AUTH.includes(router.pathname)) {
      return router.push('/login').then(() => setTimeout(() => setLoading(false), 500))
    }

    setLoading(false)
  }

  const _setInitialState = (data) => ({ set }) => {
    if (_get(data, 'profile')) {
      set(profileAtom, data['profile'])
    }
    if (_get(data, 'settings')) {
      set(settingsAtom, data['settings'])
    }
  }

  return (
    <>
      <Head>
        <title>{'ASC - Admin Portal'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={'Meta Description'}></meta>
        <meta name="keywords" content={'Meta Keywords'} />
        <link rel="shortcut icon" href="/images/logo.png" />
      </Head>
      <RecoilRoot initializeState={_setInitialState(pageProps)}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: siteSetting.current?.site?.primary_color || PRIMARY_COLOR,
              borderRadius: 0
            }
          }}
        >
          {loading
            ? <div></div>
            : <Layout>
              <Component
                {...pageProps}
              />
            </Layout>
          }
        </ConfigProvider>
      </RecoilRoot>
    </>
  )
}

MyApp.getInitialProps = async ({ ctx }) => {
  const pageProps = {}
  const isServer = typeof window === 'undefined'

  if (isServer) {
    let accessToken = _get(ctx, 'req.cookies.token')

    if (accessToken) {
      const profile = await requestMyProfile({ Authorization: `Bearer ${accessToken}` })
        .catch(e => { accessToken = '' })
      pageProps['token'] = accessToken
      pageProps['profile'] = profile
    }
    const translates = await requestGetTranslate('admin', 'en-US', {})
    pageProps['translates'] = translates

    pageProps['cookies'] = {
      sameSite: process.env.COOKIE_SAME_SITE,
      secure: process.env.COOKIE_SECURE === 'true'
    }

    const siteSettings = await requestSiteSetting()
    pageProps['settings'] = { ...siteSettings }
  }

  return { pageProps }
}


export default MyApp