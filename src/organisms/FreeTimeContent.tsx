import { IContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "./ContentsDisplay";

const freeTimeItems: IContent[] = [
  { value: "サウナ", value_en: "Sauna" },
  { value: "麻雀", value_en: "Mahjong" },
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
