import moment from "moment";
import { genders, evaluations, statuses } from "../../../constants/lists";
export const getClientValues = (values) => {
  return {
    firstName: values?.first_name || "",
    lastName: values?.last_name || "",
    gender: genders.find((gender) => gender.label === values?.gender) || null,
    position: values?.position || "",
    evaluation: values?.evaluation || "",
    evaluation:
      evaluations.find(
        (evaluation) => evaluation.label === values?.evaluation
      ) || null,
    startingDate: values?.startingDate ? moment(values?.starting_date) : "",
    status: statuses.find((status) => status.label === values?.status) || null,
    contactNumber: values?.contact_number || "",
    emergencyNumber: values?.emergency_contact || "",
    notes: values?.notes || "",
  };
};
