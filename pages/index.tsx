import {} from './index';
import type { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/nav-bar';
import Image from 'next/image';
import HeroSection from '../components/hero-section';
import FeaturesSection from '../components/features-section';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
    </>
  );
};

export default Home;
