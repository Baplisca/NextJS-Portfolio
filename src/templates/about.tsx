import React from "react";
import ArbeitContent from "../organisms/ArbeitContent";
import AwardContent from "../organisms/AwardContent";
import CurrentWorkContent from "../organisms/CurrentWorkContent";
import EducationContent from "../organisms/EducationContent";
import FreeTimeContent from "../organisms/FreeTimeContent";
import InternContent from "../organisms/InternContent";
import QualificationContent from "../organisms/QualificationContent";
import SelfIntroductionContent from "../organisms/SelfIntroductionContent";
import UpdateContent from "../organisms/UpdateContent";
import styles from "./about.module.scss";

const About = () => {
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
        <FreeTimeContent />
        <UpdateContent />
      </div>
    </>
  );
};

export default About;
