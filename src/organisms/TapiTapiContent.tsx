import { IWorkImage } from "../interfaces/work-image.interface";
import WorkImageContent from "../molecules/WorkImageContent";
import styles from "./TapiTapiContent.module.scss";

const imageItems: IWorkImage[] = [
  {
    src: "tapitapi1.jpg",
    alt: "タピタピ 画像1",
    width: 320,
    height: 680,
  },
  {
    src: "tapitapi2.jpg",
    alt: "タピタピ 画像2",
    width: 320,
    height: 680,
  },
  {
    src: "tapitapi3.jpg",
    alt: "タピタピ 画像3",
    width: 320,
    height: 680,
  },
];

const TapiTapiContent = () => {
  return (
    <>
      <h2 className="WorkH2Wrapper">タピタピ</h2>
      <p>ハッカソンで制作しました</p>
      <p>
        コロナ禍でタピオカを満喫したいタピオカ女性向け混雑表示・レコメンドアプリです
      </p>
      <p>
        プラットフォームはWeb, Androidで言語はHTML, CSS, JavaScript, Javaで,
        IDEはAndroid Studioを使用しています
      </p>
      <p>下の図はAndroidでの表示になります</p>
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

export default TapiTapiContent;
