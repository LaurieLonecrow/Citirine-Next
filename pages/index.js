import Head from 'next/head'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'

export default function Home() {
  return (
    <>
      <Head>
        <title>Citrine Hair Studio</title>
      </Head>
        <Welcome/>
        <Hero position={`top`}
        image={`https://res.cloudinary.com/lonecrow/image/upload/v1644012068/Citrine/LSA_9427_pfmsli.jpg`}/>
    </>
  );
};
