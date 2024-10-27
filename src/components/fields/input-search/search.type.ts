export interface SearchFormProps {
  className: string;
  value: unknown | string;
  placeholder: string;
  disabled: boolean;
  onChange: (value: unknown) => void;
}
