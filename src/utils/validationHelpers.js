import { isValidPhoneNumber } from "react-phone-number-input";
import * as yup from "yup";

export const phoneValidationYup = (isRequired = true) => {
  return isRequired
    ? yup
        .string()
        .required("Number is required")
        .test("format", "Invalid Number", (value) =>
          isValidPhoneNumber(value ? value : "-")
        )
    : yup
        .string()
        .test("format", "Invalid Number", (value) =>
          value ? isValidPhoneNumber(value ? value : "-") : true
        );
};

export const stringValidationYup = (
  requiredMsg,
  regex = "",
  invalidMsg = "Invalid format "
) => {
  if (requiredMsg) {
    if (regex && requiredMsg)
      return yup.string().required(requiredMsg).matches(regex, invalidMsg);
    return yup.string().required(requiredMsg);
  } else
    return yup.string().test("", invalidMsg, (value) => {
      if (!value) return true;
      return regex ? regex.test(value) : true;
    });
};
