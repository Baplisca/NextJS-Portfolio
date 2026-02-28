import { IContent } from "../interfaces/about-content.interface";
import { IWorkImage } from "../interfaces/work-image.interface";
import GoogleDialogFlow from "../molecules/GoogleDialogFlow";
import WorkImageContent from "../molecules/WorkImageContent";
import ContentsDisplay from "./ContentsDisplay";
import styles from "./VerticalContent.module.scss";

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
        右下のアイコンから開けますが、メンテナンスしていないため動きません
        (裏で動いている
        <a
          href="https://github.com/Baplisca/Dialogflow_RakutenRecipe"
          rel="noreferrer noopener"
          target="_blank"
        >
          コードリポジトリ
        </a>
        )
      </span>
    ),
    value_en: (
      <span>
        You can open it from the icon at the bottom right, but it doesnnt work
        because its not under maintenance.{" "}
        <a
          href="https://github.com/Baplisca/Dialogflow_RakutenRecipe"
          rel="noreferrer noopener"
          target="_blank"
        >
          (code running behind the scenes)
        </a>
      </span>
    ),
    isDisableBr: true,
    isDisableDot: true,
  },
];

const imageItems: IWorkImage[] = [
  {
    src: "RakutenRecipe2.jpg",
    alt: "楽天レシピ 画像1",
    width: 120,
    height: 120,
  },
];

const GoogleDialogFlowContent = () => {
  return (
    <>
      {ContentsDisplay(googleDialogFlowItems)}
      <br />
      <GoogleDialogFlow />
      <div className={styles.PortraitImageWrapper}>
        <WorkImageContent
          imageItems={imageItems}
          centerMode
          centerSlidePercentage={80}
        />
      </div>
    </>
  );
};

export default GoogleDialogFlowContent;
