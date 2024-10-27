import { Input } from "antd";
import { ErrorMessage } from "formik";
import useHooks from "hooks/useHooks";
import { TFieldprops } from "../fields.type";

const InputText = (props: TFieldprops) => {
  const {
    placeholder = "",
    type = "text",
    rootClassName = "",
    isDisabled = false,
    label = "",
    field: { value, name },
    form: { setFieldValue, setFieldTouched, touched, errors },
    onChange = () => {},
    ...otherProps
  } = props;
  const { get } = useHooks();
  return (
    <>
      <div className="flex flex-col ">
        {label ? (
          <label className="mb-1 text-base text-[#9a9a9a]">{label}</label>
        ) : null}
        <div className={"w-[340px] " + rootClassName}>
          <Input
            type={type}
            size="large"
            placeholder={placeholder}
            value={value}
            name={name}
            status={
              get(touched, name) && get(errors, name) ? "error" : undefined
            }
            onChange={(e) => {
              setFieldValue(name, e.target.value);
              onChange(e);
            }}
            onBlur={() => {
              setFieldTouched(name, true);
            }}
            disabled={isDisabled}
            {...otherProps}
          />
        </div>
      </div>
      <p className="text-red-500">
        <ErrorMessage name={name} />
      </p>
    </>
  );
};

export default InputText;
