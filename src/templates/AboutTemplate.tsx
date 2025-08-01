import ArbeitContent from "../organisms/ArbeitContent";
import AwardContent from "../organisms/AwardContent";
import CurrentWorkContent from "../organisms/CurrentWorkContent";
import EducationContent from "../organisms/EducationContent";
import FreeTimeContent from "../organisms/FreeTimeContent";
import { GeneralPresentationContent } from "../organisms/GeneralPresentationContent";
import InternContent from "../organisms/InternContent";
import PatentContent from "../organisms/PatentContent";
import QualificationContent from "../organisms/QualificationContent";
import SelfIntroductionContent from "../organisms/SelfIntroductionContent";
import UpdateContent from "../organisms/UpdateContent";
import styles from "./CommonTemplate.module.scss";

const AboutTemplate = () => {
  return (
    <>
      <div className={styles.ContentWrapper}>
        <SelfIntroductionContent />
        <CurrentWorkContent />
        <InternContent />
        <ArbeitContent />
        <EducationContent />
        <AwardContent />
        <QualificationContent />
        <GeneralPresentationContent />
        <PatentContent />
        <FreeTimeContent />
        <UpdateContent />
      </div>
    </>
  );
};

export default AboutTemplate;
