import { Form, Formik } from "formik";
import ValidationSchem from "helpers/ValidationSchem.helpers";
import usePost from "hooks/usePost";
import { isArray } from "lodash";
import React from "react";
import { IForm, MyFormikProps } from "./form.type";

const FormContent: React.FC<IForm> = (props) => {
  const {
    url,
    name,
    params = {},
    extraParams = {},
    children,
    fields,
    ...postOptions
  } = props;
  const mututePost = usePost({ ...postOptions });
  return (
    <React.Fragment>
      <Formik
        initialValues={
          isArray(fields)
            ? fields.reduce(
                (
                  prev: Record<string, unknown>,
                  curr: { name: string; value?: unknown }
                ) => ({
                  ...prev,
                  [curr.name]: curr.value ? curr.value : "",
                }),
                {}
              )
            : {}
        }
        validationSchema={ValidationSchem({ fields })}
        onSubmit={(values) => {
          mututePost.mutate({
            url,
            name,
            method: "post",
            params,
            extraParams,
            data: values,
          });
        }}
      >
        {(formikProps: MyFormikProps) => <Form>{children(formikProps)}</Form>}
      </Formik>
    </React.Fragment>
  );
};

export default FormContent;
