import Head from "next/head";
import Footer from "../molecules/Footer";
import Navbar from "../organisms/Navbar";
import { useLanguageStore } from "../stores/language-store";
import { usePageStore } from "../stores/page-store";
import WorkTemplate from "../templates/WorkTemplate";

const Work = () => {
  const languageStore = useLanguageStore();
  if (!languageStore.isEnglish) languageStore.setLanguage("En");
  const pageStore = usePageStore();
  if (pageStore.page != "work") pageStore.setPage("work");
  return (
    <>
      <Head>
        <title>Baplisca</title>
        <meta name="description" content="Baplisca Homepage" />
      </Head>
      <Navbar />
      <WorkTemplate />
      <Footer />
    </>
  );
};
export default Work;
