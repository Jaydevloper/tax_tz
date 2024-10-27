import { DatePicker } from "antd";
import dayjs from "dayjs";
import useHooks from "hooks/useHooks";
import React from "react";
import { IDateProps } from "./date.type";
import { ErrorMessage } from "formik";

const InputDate = (props: IDateProps) => {
  const {
    placeholder = "YYYY-MM-DD",
    rootClassName = "",
    label = "",
    field: { value, name },
    form: { setFieldValue, setFieldTouched, touched, errors },
    isDisabled = false,
    onChange = () => {},
    picker = "date",
    size = "large",
  } = props;
  const { get } = useHooks();
  return (
    <React.Fragment>
      <div className="flex flex-col">
        {label ? (
          <label className="mb-1 text-base text-[#9a9a9a]">{label}</label>
        ) : null}
        <DatePicker
          className={rootClassName}
          format="YYYY-MM-DD"
          placeholder={placeholder}
          name={name}
          value={value ? dayjs(value, "YYYY-MM-DD") : value}
          size={size}
          picker={picker}
          onChange={(_, value) => {
            setFieldValue(name, value);
            onChange(value);
          }}
          onBlur={() => setFieldTouched(name, true)}
          status={get(touched, name) && get(errors, name) ? "error" : ""}
          disabled={isDisabled}
        />
      </div>
      <ErrorMessage name={name} />
    </React.Fragment>
  );
};
export default InputDate;
