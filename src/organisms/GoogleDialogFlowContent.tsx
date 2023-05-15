const GoogleDialogFlowContent = () => {
  return (
    <>
      <h2 className="WorkH2Wrapper">Dialogflowを用いたチャットボット</h2>
      <p>Dialogflowを用いて簡単な献立レコメンドチャットボットを作りました</p>
      <p>
        外部APIとして
        <a
          href="https://webservice.rakuten.co.jp/documentation/recipe-category-list"
          rel="noreferrer noopener"
          target="_blank"
        >
          楽天レシピAPI
        </a>
        を使用しています
      </p>
      <p>
        ランダムに料理カテゴリーを4つ作り、選んだカテゴリー内で人気のレシピを表示します
      </p>
      <p>
        右のアイコンから試せますが、メンテナンスしていないため動かなくなる時が来るかもしれません
        (裏で動いているコード
        <a
          href="https://github.com/Baplisca/Dialogflow_RakutenRecipe"
          rel="noreferrer noopener"
          target="_blank"
        >
          リポジトリ
        </a>
        )
      </p>
    </>
  );
};

export default GoogleDialogFlowContent;
