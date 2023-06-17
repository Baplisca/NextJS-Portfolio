import { IContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "./ContentsDisplay";

const arbeitItems: IContent[] = [
  {
    value: "楽天 Webアプリケーションエンジニア 2021.7 ~ 2022.3",
    value_en: "Rakuten Applications Engineer 7/2021 ~ 3/2022",
  },
  {
    value: "東北大学 プログラミング演習A (TA) 2020.4 ~ 2020.7",
    value_en: "Tohoku University Programming Exercise TA 4/2020 ~ 7/2020",
  },
  {
    value: "東北電力さんと機械学習を用いた共同研究 (RA) 2019.4 ~ 2020.3",
    value_en:
      "Joint research using machine learning with Tohoku Electric Power 4/2019 ~ 3/2020",
  },
];

const ArbeitContent = () => {
  return (
    <>
      <h2 className="H2Wrapper">Arbeit</h2>
      <ul>{ContentsDisplay(arbeitItems)}</ul>
    </>
  );
};

export default ArbeitContent;
