import Navbar from "../organisms/Navbar";
import { useLanguageStore } from "../stores/language-store";
import { usePageStore } from "../stores/page-store";

const Work = () => {
  const languageStore = useLanguageStore();
  if (!languageStore.isEnglish) languageStore.setLanguage("En");
  const pageStore = usePageStore();
  if (pageStore.page != "work") pageStore.setPage("work");
  return (
    <>
      <Navbar />
      <h1>Work_en</h1>
    </>
  );
};
export default Work;
