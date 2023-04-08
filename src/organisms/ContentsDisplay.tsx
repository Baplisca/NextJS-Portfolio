import { IAboutContent } from "../interfaces/about-content.interface";
import { useLanguageStore } from "../stores/language-store";

const ContentsDisplay = (Items: IAboutContent[]) => {
  const languageStore = useLanguageStore();
  return Items.map((_item, idx) => {
    const value =
      languageStore.isEnglish && _item.value_en ? _item.value_en : _item.value;
    return (
      <div key={idx}>
        {idx == 0 && <br />}
        {_item.isDisableDot ? (
          <li className="DisableListDot">{value}</li>
        ) : (
          <li>{value}</li>
        )}
        {!_item.isDisableBr && <br />}
      </div>
    );
  });
};

export default ContentsDisplay;
