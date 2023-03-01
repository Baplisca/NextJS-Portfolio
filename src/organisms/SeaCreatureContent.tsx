import { IWorkImage } from "../interfaces/work-image.interface";
import WorkImageContent from "../molecules/WorkImageContent";

const imageItems: IWorkImage[] = [
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

const SeaCreatureContent = () => {
  return (
    <>
      <h2 className="WorkH2Wrapper">海洋生物たちの復讐</h2>
      <p>大学1年次に制作した初めてのゲーム作品です</p>
      <p>縦スクロールシューティングゲームで, C言語とDXライブラリを用いました</p>
      <WorkImageContent imageItems={imageItems} />
      {/* <WorkVideoContent /> */}
    </>
  );
};

export default SeaCreatureContent;
