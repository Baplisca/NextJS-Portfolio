import { IAboutContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "./ContentsDisplay";

const currentWorkItems: IAboutContent[] = [
  {
    value: "楽天 Webアプリケーションエンジニア 2022.4 ~",
    value_en: "Rakuten Applications Engineer Apr 2022 ~",
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
