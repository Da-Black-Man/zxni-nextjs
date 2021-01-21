import { NextSeo } from 'next-seo';
import Page from '../components/layout/Page';
import Hero from '../components/home/Hero';
import Offer from '../components/home/Offer';
import Why from '../components/home/Why';

export default function Home() {
  return (
    <>
      <NextSeo title="Home" description="A short description goes here." />
      <Page>
        <Hero />
        <Offer />
        <Why />
      </Page>
    </>
  );
}
