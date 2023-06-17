import { IContent } from "../interfaces/about-content.interface";
import { IWorkImage } from "../interfaces/work-image.interface";
import WorkImageContent from "../molecules/WorkImageContent";
import ContentsDisplay from "./ContentsDisplay";
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

const tapitapiItems: IContent[] = [
  {
    value: <h2 className="H2Wrapper">タピタピ</h2>,
    value_en: <h2 className="H2Wrapper">TapiTapi</h2>,
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: "ハッカソンで制作しました",
    value_en: "made in a hackathon",
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value:
      "コロナ禍でタピオカを満喫したいタピオカ女性向け混雑表示・レコメンドアプリです",
    value_en:
      "It is a congestion display and recommendation app for tapioca women who want to enjoy tapioca in corona misfortune",
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value:
      "プラットフォームはWeb, Androidで言語はHTML, CSS, JavaScript, Javaで, IDEはAndroid Studioを使用しています",
    value_en:
      "The platform is Web and Android, the languages are HTML, CSS, JavaScript, and Java, and the IDE uses Android Studio.",
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: "下の図はAndroidでの表示になります",
    value_en: "The figure below will be displayed on Android",
    isDisableBr: true,
    isDisableDot: true,
  },
];
const TapiTapiContent = () => {
  return (
    <>
      {ContentsDisplay(tapitapiItems)}
      <br />
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
