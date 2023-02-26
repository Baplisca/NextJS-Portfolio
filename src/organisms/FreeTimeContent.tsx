import { IAboutContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "../molecules/ContentsDisplay";

const freeTimeItems: IAboutContent[] = [
  { value: "サウナ" },
  { value: "麻雀" },
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
        />
      </a>
    ),
    isDisableDot: true,
  },
  { value: "ピアノ (キーボード)" },
  { value: "野球観戦 (楽天ファン)" },
];

const FreeTimeContent = () => {
  return (
    <>
      <h2 className="AboutH2Wrapper">Free time</h2>
      <ul>{ContentsDisplay(freeTimeItems)}</ul>
    </>
  );
};

export default FreeTimeContent;
