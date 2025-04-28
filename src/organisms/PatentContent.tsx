import { IContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "./ContentsDisplay";

const patentItems: IContent[] = [
  {
    value: (
      <span>
        効率的な過去回答の取得のための情報検索装置、情報検索方法及びプログラム
        (jglobal反映待ち)
        <br />
        出願番号(国際出願番号)：特願2024-146040　出願日：2024.8
      </span>
    ),
    value_en: (
      <span>
        Information search device, information search method, and program for
        efficiently acquiring past answers
        <br />
        Application number (international application number): Patent
        application:2024-146040　Application date:8/2024
      </span>
    ),
  },
  {
    value: (
      <span>
        <a
          href="https://jglobal.jst.go.jp/en/detail?JGLOBAL_ID=202503007600960878"
          rel="noreferrer noopener"
          target="_blank"
        >
          学習モデルを用いたチャットボット支援方法および装置
        </a>
        <br />
        出願番号(国際出願番号)：特願2024-024676　出願日：2024.2
      </span>
    ),
    value_en: (
      <span>
        <a
          href="https://jglobal.jst.go.jp/en/detail?JGLOBAL_ID=202503007600960878"
          rel="noreferrer noopener"
          target="_blank"
        >
          Chatbot support method and device using learning model
        </a>
        <br />
        Application number (international application number): Patent
        application 2024-024676　Application date:2/2024
      </span>
    ),
  },
];

const PatentContent = () => {
  return (
    <>
      <h2 className="H2Wrapper">Patent</h2>
      <ul>{ContentsDisplay(patentItems)}</ul>
    </>
  );
};

export default PatentContent;
