import { isArray } from "lodash";
import { TFields } from "services/types/index.type";
import * as Yup from "yup";

const ValidationSchem = ({
  fields,
  validationSchemas,
}: {
  fields: TFields;
  validationSchemas?: { [key: string]: Yup.Schema<unknown> };
}) => {
  if (!isArray(fields)) {
    return Yup.object().shape({});
  }

  const validationFields: { [key: string]: Yup.Schema<unknown> } = {};

  fields.reverse().forEach((field) => {
    let validationField;

    switch (field.type) {
      case "string":
        validationField = Yup.string().typeError(
          "Text fomratda bo'lishi kerak!"
        );
        break;
      case "object":
        validationField = Yup.object();
        break;
      case "number":
        validationField = Yup.number().typeError("Raqam bo'lishi kerak");
        break;
      case "array":
        validationField = Yup.array().typeError("Massiv bo'lishi kerak");
        break;
      case "boolean":
        validationField = Yup.boolean().typeError(
          "Boolean(true yoki false) bo'lishi kerak"
        );
        break;
      case "date":
        validationField = Yup.date().typeError("Sana bo'lishi kerak");
        break;
      case "email":
        validationField = Yup.string()
          .email("E-mail bo'lishi kerak!(example@as.co")
          .max(255)
          .required("E-mail kiritish majburiy");
        break;
      default:
        validationField = Yup.string();
    }

    if (field.required) {
      validationField = validationField.required(
        field.errorMessage ?? "Kiritish majburiy"
      );
    }

    if (field.min && validationField instanceof Yup.NumberSchema) {
      validationField = validationField.min(
        field.min,
        field.minError ?? "Juda kichkina!"
      );
    }
    if (field.constantLength && validationField instanceof Yup.StringSchema) {
      validationField = validationField.length(
        field.constantLength,
        field.constantLengthError ?? "Belgilar soni oshib ketdi!"
      );
    }

    if (field.max && validationField instanceof Yup.NumberSchema) {
      validationField = validationField.max(
        field.max,
        field.maxError ?? "Juda katta!"
      );
    }

    validationField = validationField.nullable();

    validationFields[field.name as string] = validationField;
  });

  return Yup.object().shape({ ...validationFields, ...validationSchemas });
};

export default ValidationSchem;
