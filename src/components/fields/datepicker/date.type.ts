import { TFieldprops } from "../fields.type";

export interface IDateProps extends TFieldprops {
  picker?: "date" | "week" | "month" | "quarter" | "year";
  size?: "large" | "middle" | "small";
}
