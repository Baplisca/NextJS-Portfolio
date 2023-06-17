import { IContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "./ContentsDisplay";

const qualificationItems: IContent[] = [
  {
    value: (
      <span>
        <a
          href="https://bcert.me/bc/html/show-badge.html?b=dgbepbut"
          rel="noreferrer noopener"
          target="_blank"
        >
          認定スクラムマスター® (SCM®)
        </a>{" "}
        2022.10
      </span>
    ),
    value_en: (
      <span>
        <a
          href="https://bcert.me/bc/html/show-badge.html?b=dgbepbut"
          rel="noreferrer noopener"
          target="_blank"
        >
          Certified ScrumMaster® (CSM®)
        </a>{" "}
        10/2022
      </span>
    ),
  },
  {
    value: "TOEIC 875 (L 470 R 405) 2021.5",
    value_en: "TOEIC 875 (L 470 R 405) 5/2021",
  },
  {
    value: "応用情報技術者試験 (AP) 合格 2017.10",
    value_en: "Applied Information Engineer Examination 10/2017",
  },
];

const QualificationContent = () => {
  return (
    <>
      <h2 className="H2Wrapper">Qualifications</h2>
      <ul>{ContentsDisplay(qualificationItems)}</ul>
    </>
  );
};

export default QualificationContent;
