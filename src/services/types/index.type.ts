export type TMethod = "get" | "post" | "put" | "patch" | "delete";

export type TParams = {
  filter?: string;
  sort?: string;
};
export type TExtraQuery = {
  // empty
};
export type TFieldtypes =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array"
  | "date"
  | "email"
  | "null"
  | undefined;
export type TFields = {
  name: string;
  value: unknown;
  type?: TFieldtypes;
  required?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  minError?: string;
  maxError?: string;
  constantLength?: number;
  constantLengthError?: string;
  errorMessage?: string;
}[];
