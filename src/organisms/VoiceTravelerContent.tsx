import { IContent } from "../interfaces/about-content.interface";
import { IWorkImage } from "../interfaces/work-image.interface";
import { IWorkVideo } from "../interfaces/work-video.interface";
import WorkImageContent from "../molecules/WorkImageContent";
import WorkVideoContent from "../molecules/WorkVideoContent";
import ContentsDisplay from "./ContentsDisplay";

const imageItems: IWorkImage[] = [
  {
    src: "VoiceTraveler1.jpeg",
    alt: "VoiceTraveler 画像1",
    width: 800,
    height: 444,
  },
  {
    src: "VoiceTraveler2.jpeg",
    alt: "VoiceTraveler 画像2",
    width: 800,
    height: 444,
  },
  {
    src: "VoiceTraveler3.jpeg",
    alt: "VoiceTraveler 画像3",
    width: 800,
    height: 444,
  },
  {
    src: "VoiceTraveler4.jpeg",
    alt: "VoiceTraveler 画像4",
    width: 800,
    height: 444,
  },
];

const videoItems: IWorkVideo[] = [
  {
    width: 800,
    height: 450,
    src: "https://www.youtube.com/embed/vHEbxELAfvk",
    title: "VoiceTraverler Title",
  },
];

const voiceTravelerItems: IContent[] = [
  {
    value: <h2 className="WorkH2Wrapper">ボイストラベラー (Voice Traveler)</h2>,
    value_en: <h2 className="WorkH2Wrapper">Voice Traveler</h2>,
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value:
      "音声認識と自身の声を周波数に変換して操作する前例のない世界初の音声アクションゲームです",
    value_en:
      "It is the world's first unprecedented voice action game that operates by converting voice recognition and own voice into frequency.",
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: (
      <span>
        音声認識エンジンは
        <a
          href="https://julius.osdn.jp/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Julius
        </a>
        , 周波数変換は高速フーリエ変換 (FFT)
        をゲームエンジンUnityに組み込みました
      </span>
    ),
    value_en: (
      <span>
        speech recognition engine{" "}
        <a
          href="https://julius.osdn.jp/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Julius
        </a>
        , frequency transform is Fast Fourier Transform (FFT) was incorporated
        into the game engine Unity
      </span>
    ),
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: "言語はC#です",
    value_en: "Programming Language is C#",
    isDisableBr: true,
    isDisableDot: true,
  },
  {
    value: (
      <span>
        サポーターズさんの
        <a
          href="https://talent.supporterz.jp/geekten/2020/"
          rel="noreferrer noopener"
          target="_blank"
        >
          技育展
        </a>
        に登壇しました
      </span>
    ),
    value_en: (
      <span>
        I took the stage{" "}
        <a
          href="https://talent.supporterz.jp/geekten/2020/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Supporters Technical Education Exhibition
        </a>
      </span>
    ),
    isDisableBr: true,
    isDisableDot: true,
  },
];
const VoiceTravelerContent = () => {
  return (
    <>
      {ContentsDisplay(voiceTravelerItems)}
      <br />
      <WorkImageContent imageItems={imageItems} />
      <WorkVideoContent videoItems={videoItems} />
    </>
  );
};

export default VoiceTravelerContent;
