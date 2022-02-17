import Head from 'next/head'
import MeetSection from '../components/MeetSection';
import ProductSection from '../components/ProductSection';
import Welcome from '../components/WelcomeSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Citrine Hair Studio</title>
      </Head>
        <Welcome/>
        <MeetSection/>
        <ProductSection/>
    </>
  );
};
