import { IAboutContent } from "../interfaces/about-content.interface";

const ContentsDisplay = (Items: IAboutContent[]) => {
  return Items.map((_item, idx) => {
    return (
      <>
        {idx == 0 && <br />}
        {_item.isDisableDot ? (
          <li className="DisableListDot">{_item.value}</li>
        ) : (
          <li>{_item.value}</li>
        )}
        {!_item.isDisableBr && <br />}
      </>
    );
  });
};

export default ContentsDisplay;
