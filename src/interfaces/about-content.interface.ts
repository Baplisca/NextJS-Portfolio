import { ReactElement } from "react";

export interface IAboutContent {
  value: ReactElement | string;
  value_en?: ReactElement | string;
  isDisableBr?: boolean;
  isDisableDot?: boolean;
}
