import { IContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "./ContentsDisplay";

const selfIntroductionItems: IContent[] = [
  {
    value: "横田　光悦 (Yokota Koetsu)",
    value_en: "Koetsu Yokota",
    isDisableBr: true,
    isDisableDot: true,
  },
  { value: "Rakuten Group, Inc. Applications Engineer", isDisableDot: true },
];

const SelfIntroductionContent = () => {
  return (
    <>
      <h2 className="H2Wrapper">Self-Introduction</h2>
      <ul>{ContentsDisplay(selfIntroductionItems)}</ul>
    </>
  );
};

export default SelfIntroductionContent;
