import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../organisms/Navbar";
import About from "../templates/about";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Baplisca</title>
        <meta name="description" content="Baplisca Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <About />
    </>
  );
};

export default Home;
