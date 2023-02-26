import { IAboutContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "../molecules/ContentsDisplay";

const internItems: IAboutContent[] = [
  {
    value: (
      <span>
        アカツキ　サーバーサイドエンジニア　2021.2 ~ 2021.3 (2週間){" "}
        <a
          href="https://hackerslab.aktsk.jp/2021/03/31/102547"
          rel="noreferrer noopener"
          target="_blank"
        >
          インターン感想
        </a>
      </span>
    ),
  },
  {
    value: "楽天　Webアプリケーションエンジニア 2020.11 ~ 2021.1 (3ヶ月)",
  },
  {
    value: (
      <span>
        日鉄ソリューションズ (NSSOL) 研究開発　2020.9 (3週間){" "}
        <a
          href="https://baplisca.hatenablog.com/entry/intern/nssol"
          rel="noreferrer noopener"
          target="_blank"
        >
          インターン感想
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
  },
  {
    value:
      "大和証券　金融商品開発・デリバティブ算定モデル開発・リスクマネジメント業務体験コース　2020.8 (5日間)",
  },
];

const InternContent = () => {
  return (
    <>
      <h2 className="AboutH2Wrapper">Intern</h2>
      <ul>{ContentsDisplay(internItems)}</ul>
    </>
  );
};

export default InternContent;
