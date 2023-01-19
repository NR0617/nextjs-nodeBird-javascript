import AppLayout from '../components/AppLayout';
import Head from 'next/head';


export default function Profile() {
  return (
    <>
    <Head>
    <meta charSet='utf-8' />
    <title>내 프로필 | NodeBird</title>
  </Head>
    <AppLayout>
          <div>프로필</div>
    </AppLayout>
    </>
    )
  }