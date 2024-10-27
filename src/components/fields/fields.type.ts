import { InputProps } from "antd";
import { FieldProps } from "formik";

export interface ICustomprops extends InputProps {
  label?: string;
  placeholder?: string;
  rootClassName?: string;
  isDisabled?: boolean;
  type?: string;
  onChange?: (value: unknown) => void;
}

export type TFieldprops = ICustomprops & FieldProps;
