import { Select } from "antd";
import { ErrorMessage } from "formik";
import { ISelectProps } from "./select.form";
import useHooks from "hooks/useHooks";

const InputSelect = (props: ISelectProps) => {
  const {
    rootClassName,
    form: { setFieldValue, setFieldTouched, touched, errors },
    field: { value, name },
    onChange = () => {},
    label = "",
    isDisabled,
    options = [],
    ...otherProps
  } = props;
  const { get } = useHooks();
  return (
    <>
      <div className="flex flex-col ">
        {label ? (
          <label className="mb-1 text-base text-[#9a9a9a]">{label}</label>
        ) : null}
        <Select
          className={"w-[340px] " + rootClassName}
          onChange={(e) => {
            setFieldValue(name, e);
            onChange(e);
          }}
          onBlur={() => setFieldTouched(name, true)}
          status={get(touched, name) && get(errors, name) ? "error" : ""}
          disabled={isDisabled}
          options={options}
          value={value}
          name={name}
          {...otherProps}
        />
      </div>
      <ErrorMessage name={name} />
    </>
  );
};
export default InputSelect;
