import * as yup from "yup";

import {
  stringValidationYup,
  phoneValidationYup,
} from "../../../utils/validationHelpers";

import { regex } from "../../../constants/regex";
import { isValidPhoneNumber } from "react-phone-number-input";

export const getClientValidationSchema = () =>
  yup.object().shape({
    firstName: stringValidationYup("First Name is required", regex.alphabets)
      .min(4, "At least 4 characters required")
      .max(32, "Character limit exceeded"),
    lastName: stringValidationYup("Last Name is required", regex.alphabets)
      .min(4, "At least 4 characters required")
      .max(32, "Character limit exceeded"),
    gender: yup.object().required("Please select a gender").nullable(),
    position: stringValidationYup("Position is required", regex.alphabets)
      .min(4, "At least 4 characters required")
      .max(32, "Character limit exceeded"),
    evaluation: yup.object().required("Please select an evluation").nullable(),
    startingDate: stringValidationYup("Starting Date is required"),
    status: yup.object().required("Please select a status").nullable(),
    contactNumber: phoneValidationYup(),
    emergencyContact: yup
      .string()
      .test("primary", "Invalid Format", (value) =>
        value ? isValidPhoneNumber(value ? value : "-") : true
      )
      .test(
        "secondary",
        "Emergency Contact cannot be same primary contact",
        function (value, ctx) {
          return ctx?.parent?.contactNumber !== value;
        }
      ),
    notes: stringValidationYup(),
  });
