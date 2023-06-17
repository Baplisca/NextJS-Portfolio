import { IContent } from "../interfaces/about-content.interface";
import { IWorkImage } from "../interfaces/work-image.interface";
import { IWorkVideo } from "../interfaces/work-video.interface";
import WorkImageContent from "../molecules/WorkImageContent";
import WorkVideoContent from "../molecules/WorkVideoContent";
import ContentsDisplay from "./ContentsDisplay";

const imageItems: IWorkImage[] = [
  {
    src: "SeaCreature0.jpeg",
    alt: "海洋生物たちの復讐 Title",
    width: 800,
    height: 582,
  },
  {
    src: "SeaCreature1.jpeg",
    alt: "海洋生物たちの復讐 画像1",
    width: 800,
    height: 582,
  },
  {
    src: "SeaCreature2.jpeg",
    alt: "海洋生物たちの復讐 画像2",
    width: 800,
    height: 582,
  },
  {
    src: "SeaCreature3.jpeg",
    alt: "海洋生物たちの復讐 画像3",
    width: 800,
    height: 582,
  },
];

const videoItems: IWorkVideo[] = [
  {
    width: 800,
    height: 450,
    src: "https://www.youtube.com/embed/c98LeJbuA24",
    title: "海洋生物たちの復讐 Stage1",
  },
  {
    width: 800,
    height: 450,
    src: "https://www.youtube.com/embed/pgpB8KDjwEI",
    title: "海洋生物たちの復讐 Stage2",
  },
  {
    width: 800,
    height: 450,
    src: "https://www.youtube.com/embed/aorVrGWEC6M",
    title: "海洋生物たちの復讐 Stage3",
  },
];

const seaCreatureItems: IContent[] = [
  {
    value: <h2 className="H2Wrapper">海洋生物たちの復讐</h2>,
    value_en: <h2 className="H2Wrapper">Revenge of the Sea Creatures</h2>,
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: "大学1年次に制作した初めてのゲーム作品です",
    value_en: "This is the first game I made in my first year at university.",
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value:
      "縦スクロールシューティングゲームで, C言語とDXライブラリを用いました",
    value_en:
      "Vertical scrolling shooting game using C language and DX library",
    isDisableBr: true,
    isDisableDot: true,
  },
];

const SeaCreatureContent = () => {
  return (
    <>
      {ContentsDisplay(seaCreatureItems)}
      <br />
      <WorkImageContent imageItems={imageItems} />
      <WorkVideoContent videoItems={videoItems} />
    </>
  );
};

export default SeaCreatureContent;
