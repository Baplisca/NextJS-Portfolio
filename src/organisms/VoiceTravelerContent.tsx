import { IWorkImage } from "../interfaces/work-image.interface";
import { IWorkVideo } from "../interfaces/work-video.interface";
import WorkImageContent from "../molecules/WorkImageContent";
import WorkVideoContent from "../molecules/WorkVideoContent";

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

const VoiceTravelerContent = () => {
  return (
    <>
      <h2 className="WorkH2Wrapper">ボイストラベラー (Voice Traveler)</h2>
      <p>
        音声認識と自身の声を周波数に変換して操作する前例のない世界初の音声アクションゲームです
      </p>
      <p>
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
      </p>
      <p>言語はC#です</p>
      <p>
        サポーターズさんの
        <a
          href="https://talent.supporterz.jp/geekten/2020/"
          rel="noreferrer noopener"
          target="_blank"
        >
          技育展
        </a>
        に登壇しました
      </p>
      <WorkImageContent imageItems={imageItems} />
      <WorkVideoContent videoItems={videoItems} />
    </>
  );
};

export default VoiceTravelerContent;
