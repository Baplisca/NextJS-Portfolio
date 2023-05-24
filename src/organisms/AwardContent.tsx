import { IContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "./ContentsDisplay";

const awardItems: IContent[] = [
  {
    value: (
      <span>
        <a
          href="https://www.softbank.jp/corp/news/press/sbkk/2019/20191015_02/"
          rel="noreferrer noopener"
          target="_blank"
        >
          ソフトバンクAI人材育成スカラーシップ
        </a>{" "}
        2020.4 ~ 2021.3
      </span>
    ),
    value_en: (
      <span>
        <a
          href="https://www.softbank.jp/corp/news/press/sbkk/2019/20191015_02/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Softbank AI Human Resources Development Scholarship
        </a>{" "}
        4/2020 ~ 3/2021
      </span>
    ),
  },
];

const AwardContent = () => {
  return (
    <>
      <h2 className="AboutH2Wrapper">Awards (Official)</h2>
      <ul>{ContentsDisplay(awardItems)}</ul>
    </>
  );
};

export default AwardContent;
