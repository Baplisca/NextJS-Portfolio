import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../organisms/Navbar";
import AboutTemplate from "../templates/AboutTemplate";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Baplisca</title>
        <meta name="description" content="Baplisca Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AboutTemplate />
    </>
  );
};

export default Home;
