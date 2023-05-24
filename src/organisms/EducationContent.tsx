import { IContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "./ContentsDisplay";

const educationItems: IContent[] = [
  {
    value: "東北大学大学院 情報科学研究科 応用情報科学専攻 卒業 2022.3",
    value_en:
      "Tohoku University Graduate School of Information Sciences Graduation 3/2022",
  },
  {
    value: "東北大学大学院 情報科学研究科 応用情報科学専攻 入学 2020.4",
    value_en:
      "Tohoku University Graduate School of Information Sciences Admission 4/2020",
  },
  {
    value: "東北大学 工学部 電気情報物理工学科 卒業 2020.3",
    value_en: "Tohoku University Faculty of Engineering Graduation 3/2020",
  },
  {
    value: "東北大学 工学部 電気情報物理工学科 入学 2016.4",
    value_en: "Tohoku University Faculty of Engineering Admission 4/2016",
  },
  {
    value: "宮城県宮城野高等学校 総合学科 卒業 2016.3",
    value_en: "Miyagino High School Integrated course Graduation 3/2016",
  },
];

const EducationContent = () => {
  return (
    <>
      <h2 className="AboutH2Wrapper">Education</h2>
      <ul>{ContentsDisplay(educationItems)}</ul>
    </>
  );
};

export default EducationContent;
