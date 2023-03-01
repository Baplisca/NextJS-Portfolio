import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../organisms/Navbar";
import WorkTemplate from "../templates/WorkTemplate";

const Work: NextPage = () => {
  return (
    <>
      <Head>
        <title>Baplisca</title>
        <meta name="description" content="Baplisca Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <WorkTemplate />
    </>
  );
};

export default Work;
