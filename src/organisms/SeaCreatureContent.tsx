import { IWorkImage } from "../interfaces/work-image.interface";
import { IWorkVideo } from "../interfaces/work-video.interface";
import WorkImageContent from "../molecules/WorkImageContent";
import WorkVideoContent from "../molecules/WorkVideoContent";

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

const SeaCreatureContent = () => {
  return (
    <>
      <h2 className="WorkH2Wrapper">海洋生物たちの復讐</h2>
      <p>大学1年次に制作した初めてのゲーム作品です</p>
      <p>縦スクロールシューティングゲームで, C言語とDXライブラリを用いました</p>
      <WorkImageContent imageItems={imageItems} />
      <WorkVideoContent videoItems={videoItems} />
    </>
  );
};

export default SeaCreatureContent;
