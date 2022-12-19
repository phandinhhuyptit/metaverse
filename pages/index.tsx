import Head from "next/head";
import { Navbar, Footer } from "@components/index";
import {
  About,
  Hero,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Insights,
  Feedback,
} from "@sections/index";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Head>
        <title>Metaversus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://stijndv.com" />
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </Head>
      <div className="bg-primary-black min-h-screen overflow-hidden">
        <Navbar />
        <Hero />
        <div className="relative">
          <About />
          <div className="gradient-03" />
          <Explore />
        </div>
        <div className="relative">
          <GetStarted />
          <div className="gradient-04 z-0" />
          <WhatsNew />
        </div>
        <World />
        <div className="relative">
          <Insights />
          <div className="gradient-04 z-0" />
          <Feedback />
        </div>
      </div>
      <Footer />
    </div>
  );
}
