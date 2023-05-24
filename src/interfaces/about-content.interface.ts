import { ReactElement } from "react";

export interface IContent {
  value: ReactElement | string;
  value_en?: ReactElement | string;
  isDisableBr?: boolean;
  isDisableDot?: boolean;
}
