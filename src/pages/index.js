import { NextSeo } from 'next-seo';
import Page from '../components/layout/Page';
import Hero from '../components/home/Hero';
import Offer from '../components/home/Offer';
import Why from '../components/home/Why';
import Gap from '../components/home/Gap';
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context';

export default function Home() {
  return (
    <>
      <NextSeo title="Home" description="A short description goes here." />
      <SmoothScrollProvider options={{ smooth: true }}>
        <Page>
          <Hero />
          <Offer />
          <Why />
          <Gap />
        </Page>
      </SmoothScrollProvider>
    </>
  );
}
