import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../organisms/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Baplisca</title>
        <meta name="description" content="Baplisca Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>Home</h1>
    </>
  );
};

export default Home;
