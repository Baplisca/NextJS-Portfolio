import { IContent } from "../interfaces/about-content.interface";
import GoogleDialogFlow from "../molecules/GoogleDialogFlow";
import ContentsDisplay from "./ContentsDisplay";

const googleDialogFlowItems: IContent[] = [
  {
    value: <h2 className="H2Wrapper">レコメンドレシピチャットボット</h2>,
    value_en: <h2 className="H2Wrapper">Recommendation recipe chatbot</h2>,
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: "Dialogflowを用いて簡単な献立レコメンドチャットボットを作りました",
    value_en: "I made a simple menu recommendation chatbot using Dialogflow",
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: (
      <span>
        外部APIとして
        <a
          href="https://webservice.rakuten.co.jp/documentation/recipe-category-list"
          rel="noreferrer noopener"
          target="_blank"
        >
          楽天レシピAPI
        </a>
        を使用しています
      </span>
    ),
    value_en: (
      <span>
        I am using{" "}
        <a
          href="https://webservice.rakuten.co.jp/documentation/recipe-category-list"
          rel="noreferrer noopener"
          target="_blank"
        >
          Rakuten Recipe API
        </a>{" "}
        as an external API
      </span>
    ),
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value:
      "ランダムに料理カテゴリーを4つ作り、選んだカテゴリー内で人気のレシピを表示します",
    value_en:
      "Randomly create 4 cooking categories and display popular recipes in the selected category",
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: (
      <span>
        右下のアイコンから試せますが、メンテナンスしていないため動かなくなる時が来るかもしれません
        (裏で動いているコード
        <a
          href="https://github.com/Baplisca/Dialogflow_RakutenRecipe"
          rel="noreferrer noopener"
          target="_blank"
        >
          リポジトリ
        </a>
        )
      </span>
    ),
    value_en: (
      <span>
        You can try it from the icon on the bottom right, but it may stop
        working because it is not maintained{" "}
        <a
          href="https://github.com/Baplisca/Dialogflow_RakutenRecipe"
          rel="noreferrer noopener"
          target="_blank"
        >
          (code running behind the scenes)
        </a>
        )
      </span>
    ),
    isDisableBr: true,
    isDisableDot: true,
  },
];
const GoogleDialogFlowContent = () => {
  return (
    <>
      {ContentsDisplay(googleDialogFlowItems)}
      <br />
      <GoogleDialogFlow />
    </>
  );
};

export default GoogleDialogFlowContent;
