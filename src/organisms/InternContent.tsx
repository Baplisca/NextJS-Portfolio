import { IContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "./ContentsDisplay";

const internItems: IContent[] = [
  {
    value: (
      <span>
        アカツキ サーバーサイドエンジニア 2021.2 ~ 2021.3 (2週間){" "}
        <a
          href="https://hackerslab.aktsk.jp/2021/03/31/102547"
          rel="noreferrer noopener"
          target="_blank"
        >
          インターン感想
        </a>
      </span>
    ),
    value_en: (
      <span>
        Akatsuki Inc. Server-side Engineer 2/2021 ~ 3/2021 (2 weeks){" "}
        <a
          href="https://hackerslab.aktsk.jp/2021/03/31/102547"
          rel="noreferrer noopener"
          target="_blank"
        >
          Internship impression
        </a>
      </span>
    ),
  },
  {
    value: "楽天 Webアプリケーションエンジニア 2020.11 ~ 2021.1 (3ヶ月)",
    value_en: "Rakuten Applications Engineer 11/2020 ~ 1/2021 (3 months)",
  },
  {
    value: (
      <span>
        日鉄ソリューションズ (NSSOL) 研究開発 2020.9 (3週間){" "}
        <a
          href="https://baplisca.hatenablog.com/entry/intern/nssol"
          rel="noreferrer noopener"
          target="_blank"
        >
          インターン感想
        </a>
      </span>
    ),
    value_en: (
      <span>
        NSSOL R&D 9/2020 (3 weeks){" "}
        <a
          href="https://baplisca.hatenablog.com/entry/intern/nssol"
          rel="noreferrer noopener"
          target="_blank"
        >
          Internship impression
        </a>
      </span>
    ),
  },
  {
    value: (
      <span>
        Amazon Web Services SA 2020.8 ~ 2020.9 (3日間){" "}
        <a
          rel="noreferrer noopener"
          href="https://baplisca.hatenablog.com/entry/intern/aws"
          target="_blank"
        >
          インターン感想
        </a>
      </span>
    ),
    value_en: (
      <span>
        Amazon Web Services SA 8/2020 ~ 9/2020 (3 days){" "}
        <a
          rel="noreferrer noopener"
          href="https://baplisca.hatenablog.com/entry/intern/aws"
          target="_blank"
        >
          Internship impression
        </a>
      </span>
    ),
  },
  {
    value: (
      <span>
        {"MUIT サーバーサイド 2020.8 (3日間) "}
        <a
          href="https://baplisca.hatenablog.com/entry/intern/muit"
          rel="noreferrer noopener"
          target="_blank"
        >
          インターン感想
        </a>
      </span>
    ),
    value_en: (
      <span>
        {"MUIT Server-side 8/2020 (3 days) "}
        <a
          href="https://baplisca.hatenablog.com/entry/intern/muit"
          rel="noreferrer noopener"
          target="_blank"
        >
          Internship impression
        </a>
      </span>
    ),
  },
  {
    value:
      "大和証券 金融商品開発・デリバティブ算定モデル開発・リスクマネジメント業務体験コース　2020.8 (5日間)",
    value_en: "Daiwa Securities 8/2020 (5 days)",
  },
];

const InternContent = () => {
  return (
    <>
      <h2 className="H2Wrapper">Intern</h2>
      <ul>{ContentsDisplay(internItems)}</ul>
    </>
  );
};

export default InternContent;
