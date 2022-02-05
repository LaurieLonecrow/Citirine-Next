import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import NavBar from '../components/NavBar'
import Welcome from '../components/Welcome'

export default function Home() {
  return (
    <>
      <Head>
        <title>Citrine Hair Studio</title>
      </Head>
        <NavBar/>
        <Hero 
        position={`center`}
        image={`https://res.cloudinary.com/lonecrow/image/upload/v1643990999/Citrine/LSA_9484_f5yj6d.jpg`}/>
        <Welcome/>
        <Hero position={`top`}
        image={`https://res.cloudinary.com/lonecrow/image/upload/v1644012068/Citrine/LSA_9427_pfmsli.jpg`}/>
        <Footer/>
    </>
  )
}
