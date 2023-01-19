//모든 부분에 공통
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return( 
  <>
  <Head>
    <meta charSet='utf-8' />
    <title>NodeBird</title>
  </Head>
  <div>공통메뉴</div>
  <Component {...pageProps} /> 
  </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default MyApp
