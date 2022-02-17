import Head from 'next/head'
import MeetSection from '../components/MeetSection';
import Welcome from '../components/WelcomeSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Citrine Hair Studio</title>
      </Head>
        <Welcome/>
        <MeetSection/>
    </>
  );
};
