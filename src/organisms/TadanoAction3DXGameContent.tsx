import { IContent } from "../interfaces/about-content.interface";
import { IWorkImage } from "../interfaces/work-image.interface";
import { IWorkVideo } from "../interfaces/work-video.interface";
import WorkImageContent from "../molecules/WorkImageContent";
import WorkVideoContent from "../molecules/WorkVideoContent";
import ContentsDisplay from "./ContentsDisplay";

const imageItems: IWorkImage[] = [
  {
    src: "TadanoAction3DXGame1.jpeg",
    alt: "タダノアクション 画像1",
    width: 800,
    height: 443,
  },
  {
    src: "TadanoAction3DXGame2.jpeg",
    alt: "タダノアクション 画像2",
    width: 800,
    height: 443,
  },
  {
    src: "TadanoAction3DXGame3.jpeg",
    alt: "タダノアクション 画像3",
    width: 800,
    height: 443,
  },
  {
    src: "TadanoAction3DXGame4.jpeg",
    alt: "タダノアクション 画像4",
    width: 800,
    height: 443,
  },
];

const videoItems: IWorkVideo[] = [
  {
    width: 800,
    height: 450,
    src: "https://www.youtube.com/embed/js8clKiCJh4",
    title: "タダノアクション 動画1",
  },
  {
    width: 800,
    height: 450,
    src: "https://www.youtube.com/embed/LSHmVqN65Hg",
    title: "タダノアクション 動画2",
  },
  {
    width: 800,
    height: 450,
    src: "https://www.youtube.com/embed/eoaY_FXo4lg",
    title: "タダノアクション 動画3",
  },
  {
    width: 800,
    height: 450,
    src: "https://www.youtube.com/embed/AwZZk7FH7T4",
    title: "タダノアクション 動画4",
  },
  {
    width: 800,
    height: 450,
    src: "https://www.youtube.com/embed/vP6oiT5K1Lw",
    title: "タダノアクション 動画5",
  },
];

const tadanoActionItems: IContent[] = [
  {
    value: <h2 className="H2Wrapper">TadanoAction3DXGame</h2>,
    value_en: <h2 className="H2Wrapper">TadanoAction3DXGame</h2>,
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value:
      "3Dゲームを作りたい and Blenderの勉強目的で制作した3Dアクションゲーム",
    value_en:
      "I want to make a 3D game and I made a 3D action game for studying Blender",
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: "規模がデカすぎて, 制作は中断しました",
    value_en: "The scale was too big, so the production was stopped.",
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: "言語はC#で, ゲームエンジンはUnityを使用しています",
    value_en: "The language is C#, and the game engine uses Unity.",
    isDisableBr: true,
    isDisableDot: true,
  },
];

const TadanoAction3DXGameContent = () => {
  return (
    <>
      {ContentsDisplay(tadanoActionItems)}
      <br />
      <WorkImageContent imageItems={imageItems} />
      <WorkVideoContent videoItems={videoItems} />
    </>
  );
};

export default TadanoAction3DXGameContent;
