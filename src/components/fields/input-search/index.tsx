import Search from "antd/es/transfer/search";
import { SearchFormProps } from "./search.type";

const InputSearch = (props: SearchFormProps) => {
  const {
    placeholder,
    disabled = false,
    className = "",
    value,
    onChange,
    ...otherProps
  } = props;
  return (
    <>
      <div className={"w-[340px] " + className}>
        <Search
          placeholder={placeholder}
          disabled={disabled}
          value={value as string}
          onChange={onChange}
          {...otherProps}
        />
      </div>
    </>
  );
};

export default InputSearch;
