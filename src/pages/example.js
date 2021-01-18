import { NextSeo } from "next-seo";
import Page from "../components/layout/Page"
import Hero from "../components/home/Hero"
export default function Example() {
  return (
    <>
      <NextSeo
        title="Example Page"
      description="A short description goes here."
      />
      <Page>
        <Hero />
      </Page>

    </>
  );
}
