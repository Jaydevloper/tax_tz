import { TFieldprops } from "../fields.type";

export interface ISelectProps extends TFieldprops {
  options: {
    value: unknown;
    label: string;
    disabled?: boolean;
    title?: string;
  }[];
}
