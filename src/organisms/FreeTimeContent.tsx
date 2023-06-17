import { IContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "./ContentsDisplay";

const freeTimeItems: IContent[] = [
  { value: "サウナ", value_en: "Sauna" },
  { value: "麻雀", value_en: "Mahjong" },
  {
    value: (
      <a
        href="https://atcoder.jp/users/Baplisca"
        rel="noreferrer noopener"
        target="_blank"
      >
        競技プログラミング
      </a>
    ),
    isDisableBr: true,
    value_en: (
      <a
        href="https://atcoder.jp/users/Baplisca"
        rel="noreferrer noopener"
        target="_blank"
      >
        Competitive programming
      </a>
    ),
  },
  {
    value: (
      <a
        href="https://atcoder.jp/users/Baplisca"
        rel="noreferrer noopener"
        target="_blank"
        title="Baplisca"
      >
        <img
          src="https://img.shields.io/endpoint?url=https%3A%2F%2Fatcoder-badges.now.sh%2Fapi%2Fatcoder%2Fjson%2FBaplisca"
          alt="競技プログラミング レート"
          loading="lazy"
        />
      </a>
    ),
    isDisableDot: true,
  },
  { value: "ピアノ (キーボード)", value_en: "Piano" },
  { value: "野球観戦 (楽天ファン)", value_en: "Watching baseball game" },
];

const FreeTimeContent = () => {
  return (
    <>
      <h2 className="H2Wrapper">Free time</h2>
      <ul>{ContentsDisplay(freeTimeItems)}</ul>
    </>
  );
};

export default FreeTimeContent;
