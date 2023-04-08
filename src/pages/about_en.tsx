import { NextPage } from "next";
import Head from "next/head";
import Footer from "../molecules/Footer";
import Navbar from "../organisms/Navbar";
import { useLanguageStore } from "../stores/language-store";
import { usePageStore } from "../stores/page-store";
import AboutTemplate from "../templates/AboutTemplate";

const AboutEn: NextPage = () => {
  const languageStore = useLanguageStore();
  if (!languageStore.isEnglish) languageStore.setLanguage("En");
  const pageStore = usePageStore();
  if (pageStore.page != "about") pageStore.setPage("about");
  return (
    <>
      <Head>
        <title>Baplisca</title>
        <meta name="description" content="Baplisca Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <AboutTemplate />
      <Footer />
    </>
  );
};

export default AboutEn;
