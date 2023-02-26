import { IAboutContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "../molecules/ContentsDisplay";

const arbeitItems: IAboutContent[] = [
  { value: "楽天 Webアプリケーションエンジニア 2021.7 ~ 2022.3" },
  { value: "東北大学 プログラミング演習A (TA) 2020.4 ~ 2020.7" },
  { value: "東北電力さんと機械学習を用いた共同研究 (RA) 2019.4 ~ 2020.3" },
];

const ArbeitContent = () => {
  return (
    <>
      <h2 className="AboutH2Wrapper">Arbeit</h2>
      <ul>{ContentsDisplay(arbeitItems)}</ul>
    </>
  );
};

export default ArbeitContent;
