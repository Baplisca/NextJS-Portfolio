import { IAboutContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "./ContentsDisplay";

const currentWorkItems: IAboutContent[] = [
  {
    value: "楽天 Webアプリケーションエンジニア 2022.4 ~",
    value_en: "Rakuten Applications Engineer Apr 2022 ~",
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: "(週4内定者バイト 2021.7 ~ 2022.3)",
    value_en: "(part-time job at 4 times a week 7/2021 ~ 3/2022)",
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: "(週3インターン 2020.11 ~ 2021.1)",
    value_en: "(Intern 3 times a week 11/2020 ~ 1/2021)",
    isDisableDot: true,
  },
];

const CurrentWorkContent = () => {
  return (
    <>
      <h2 className="AboutH2Wrapper">Current Work</h2>
      <ul>{ContentsDisplay(currentWorkItems)}</ul>
    </>
  );
};

export default CurrentWorkContent;
