import { IAboutContent } from "../interfaces/about-content.interface";
import ContentsDisplay from "../molecules/ContentsDisplay";

const selfIntroductionItems: IAboutContent[] = [
  {
    value: "横田　光悦 (Yokota Koetsu)",
    isDisableBr: true,
    isDisableDot: true,
  },
  { value: "Rakuten Group, Inc. Applications Engineer", isDisableDot: true },
];

const SelfIntroductionContent = () => {
  return (
    <>
      <h2 className="AboutH2Wrapper">Self-Introduction</h2>
      <ul>{ContentsDisplay(selfIntroductionItems)}</ul>
    </>
  );
};

export default SelfIntroductionContent;
