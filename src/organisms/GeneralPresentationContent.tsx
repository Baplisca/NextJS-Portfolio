import { IContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "./ContentsDisplay";

const generalPresentationItems: IContent[] = [
  {
    value: (
      <span>
        「Java+MySQLからTypeScript+Cassandraへの移行開発」 Rakuten Tech Conf
        2023
      </span>
    ),
  },
  {
    value: (
      <span>
        <a
          href="https://rakutentechsendai.connpass.com/event/297724/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Rakuten Tech Conf 2023 in Sendai
        </a>
        {"  運営"}
      </span>
    ),
  },
  {
    value: (
      <span>
        <a
          href="https://lets-go-study-meeting.connpass.com/event/276114/"
          rel="noreferrer noopener"
          target="_blank"
        >
          「(超主観)ゲーム開発とWeb開発の違い」 はじめてのIT勉強会 in 仙台(2023)
        </a>
        {"  "}
        <a
          href="https://speakerdeck.com/baplisca/chao-zhu-guan-gemukai-fa-towebkai-fa-nowei-i"
          rel="noreferrer noopener"
          target="_blank"
        >
          資料リンク
        </a>
      </span>
    ),
  },
  {
    value: (
      <span>
        <a
          href="https://lets-go-study-meeting.connpass.com/event/266091/"
          rel="noreferrer noopener"
          target="_blank"
        >
          「マシュマロチャレンジでチームビルディング体験」 はじめてのIT勉強会 in
          仙台(2022)
        </a>
        {"  "}
        <a
          href="https://docs.google.com/presentation/d/1Hrw0ZhsqoEa2XX2PPY_wbf2jcEslF-p0XBGoFuerhgA/edit#slide=id.g199ce97adf9_2_121"
          rel="noreferrer noopener"
          target="_blank"
        >
          資料リンク
        </a>
      </span>
    ),
  },
  {
    value: (
      <span>
        <a
          href="https://rakutentechsendai.connpass.com/event/264431/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Rakuten Tech Conf 2022 in Sendai
        </a>
        {"  運営"}
      </span>
    ),
  },
  {
    value: (
      <span>
        <a
          href="https://aktsk.connpass.com/event/190782/"
          rel="noreferrer noopener"
          target="_blank"
        >
          「サークルで新感覚ボイスゲームを作った話」 Akatsuki Geek Live
          2020-2021 Vol.1
        </a>
        {"  "}
        <a
          href="https://speakerdeck.com/baplisca/voicetraveler-in-akatsuki-lightning-talk"
          rel="noreferrer noopener"
          target="_blank"
        >
          資料リンク
        </a>
      </span>
    ),
  },
  {
    value: (
      <span>
        <a
          href="https://talent.supporterz.jp/geekten/2020/"
          rel="noreferrer noopener"
          target="_blank"
        >
          「ボイストラベラー」 技育展 2020 チーム開発部門
        </a>
      </span>
    ),
  },
];

export const GeneralPresentationContent = () => {
  return (
    <>
      <h2 className="H2Wrapper">General Presentation</h2>
      <ul>{ContentsDisplay(generalPresentationItems)}</ul>
    </>
  );
};
