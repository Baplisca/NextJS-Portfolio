import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../organisms/Navbar";
import { useLanguageStore } from "../stores/language-store";
import { usePageStore } from "../stores/page-store";
import WorkTemplate from "../templates/WorkTemplate";

const Work: NextPage = () => {
  const languageStore = useLanguageStore();
  if (languageStore.isEnglish) languageStore.setLanguage("Ja");
  const pageStore = usePageStore();
  if (pageStore.page != "work") pageStore.setPage("work");
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
