import { IAboutContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "../molecules/ContentsDisplay";

const qualificationItems: IAboutContent[] = [
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
  },
  { value: "TOEIC 875 (L 470 R 405) 2021.5" },
  { value: "応用情報技術者試験 (AP) 合格 2017.10" },
];

const QualificationContent = () => {
  return (
    <>
      <h2 className="AboutH2Wrapper">Qualifications</h2>
      <ul>{ContentsDisplay(qualificationItems)}</ul>
    </>
  );
};

export default QualificationContent;
