import { IAboutContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "../molecules/ContentsDisplay";

const currentWorkItems: IAboutContent[] = [
  { value: "楽天 Webアプリケーションエンジニア 2022.4 ~" },
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
