import { IAboutContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "../molecules/ContentsDisplay";

const awardItems: IAboutContent[] = [
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
