import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { evaluations, genders, statuses } from "../../../constants/lists";
import network from "../../../NetworkServices/network";
import {
  Button,
  DatePicker,
  FormInput,
  PhoneInput,
  Select,
  Toast,
} from "../../common";
import { message } from "antd";
import { getClientValidationSchema } from "./clientValidationSchema";
import { getClientValues } from "./clientValues";

const ClientForm = ({ clientId }) => {
  const formikRef = useRef();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setClientToEdit(clientId);
  }, []);

  const setClientToEdit = async (clientId) => {
    const clientResponse =
      clientId && (await network.getClientDetail(clientId));
    if (clientResponse) {
      if (clientResponse.errorMsg) {
        message.error(clientResponse.errorMsg);
      } else {
        formikRef.current &&
          formikRef.current.setValues(getClientValues(clientResponse));
      }
    }
  };

  const onSubmit = async (values) => {
    setLoading(true);
    const clientResponse = clientId
      ? await network.updateClient(clientId, values)
      : await network.addClient(values);
    setLoading(false);
    if (clientResponse.errorMsg) {
      Toast.error(clientResponse.errorMsg);
    } else {
      Toast.success(`Client ${clientId ? "updated" : "added"} successfully`);
    }
  };
  return (
    <Formik
      initialValues={getClientValues()}
      validationSchema={getClientValidationSchema()}
      onSubmit={onSubmit}
      innerRef={formikRef}
    >
      {(formikProps) => {
        return (
          <form className="p-6 w-md bg-white rounded-lg border border-gray-200 shadow-md relative">
            <legend className="font-bold text-xl text-start mb-10">
              Client Information
            </legend>
            <div className="grid grid-cols-2 gap-6">
              <fieldset>
                <FormInput
                  label={"First Name"}
                  placeholder={"Enter first name"}
                  key={"firstName"}
                  value={formikProps.values.firstName}
                  onChange={formikProps.handleChange("firstName")}
                  onBlur={formikProps.handleBlur("firstName")}
                  errorMsg={
                    formikProps.errors.firstName &&
                    formikProps.touched.firstName &&
                    formikProps.errors.firstName
                  }
                />
                <FormInput
                  label={"Last Name"}
                  placeholder={"Enter last name"}
                  key={"lastName"}
                  value={formikProps.values.lastName}
                  onChange={formikProps.handleChange("lastName")}
                  onBlur={formikProps.handleBlur("lastName")}
                  errorMsg={
                    formikProps.errors.lastName &&
                    formikProps.touched.lastName &&
                    formikProps.errors.lastName
                  }
                />
                <Select
                  label={"Gender"}
                  placeholder={"Select Gender"}
                  key={"gender"}
                  options={genders}
                  value={formikProps.values.gender}
                  onChange={(value) => {
                    formikProps.setFieldValue("gender", value);
                  }}
                  onBlur={formikProps.handleBlur("gender")}
                  errorMsg={
                    formikProps.errors.gender &&
                    formikProps.touched.gender &&
                    formikProps.errors.gender
                  }
                  formatOptionLabel={(option) => option.label}
                />
                <FormInput
                  label={"Position"}
                  placeholder={"Enter position"}
                  key={"position"}
                  value={formikProps.values.position}
                  onChange={formikProps.handleChange("position")}
                  onBlur={formikProps.handleBlur("position")}
                  errorMsg={
                    formikProps.errors.position &&
                    formikProps.touched.position &&
                    formikProps.errors.position
                  }
                />
                <Select
                  label={"Evaluation"}
                  placeholder={"Enter Evaluation"}
                  key={"evaluation"}
                  options={evaluations}
                  onChange={(value) => {
                    formikProps.setFieldValue("evaluation", value);
                  }}
                  onBlur={formikProps.handleBlur("evaluation")}
                  value={formikProps.values.evaluation}
                  errorMsg={
                    formikProps.errors.evaluation &&
                    formikProps.touched.evaluation &&
                    formikProps.errors.evaluation
                  }
                  formatOptionLabel={(option) => option.label}
                />
              </fieldset>
              <fieldset>
                <Select
                  label={"Status"}
                  placeholder={"Select Status"}
                  key={"status"}
                  options={statuses}
                  onChange={(value) => {
                    formikProps.setFieldValue("status", value);
                  }}
                  onBlur={formikProps.handleBlur("status")}
                  value={formikProps.values.status}
                  errorMsg={
                    formikProps.errors.status &&
                    formikProps.touched.status &&
                    formikProps.errors.status
                  }
                  formatOptionLabel={(option) => option.label}
                />
                <DatePicker
                  label={"Starting Date"}
                  placeholder={"Select Startign Date"}
                  key={"startingDate"}
                  value={formikProps.values.startingDate}
                  errorMsg={
                    formikProps.errors.startingDate &&
                    formikProps.touched.startingDate &&
                    formikProps.errors.startingDate
                  }
                  onChange={(date) => {
                    formikProps.setFieldValue("startingDate", date);
                  }}
                  selected={formikProps.values.startingDate}
                />
                <PhoneInput
                  label={"Contact Number"}
                  placeholder={"Enter Contact Number"}
                  key={"contactNumber"}
                  onChange={(value) => {
                    formikProps.setFieldValue("contactNumber", value);
                  }}
                  onBlur={formikProps.handleBlur("contactNumber")}
                  value={formikProps.values.contactNumber}
                  errorMsg={
                    formikProps.errors.contactNumber &&
                    formikProps.touched.contactNumber &&
                    formikProps.errors.contactNumber
                  }
                />
                <PhoneInput
                  label={"Emergency Number"}
                  placeholder={"Enter Emergency Number"}
                  key={"emergencyNumber"}
                  onChange={(value) => {
                    formikProps.setFieldValue("emergencyNumber", value);
                  }}
                  onBlur={formikProps.handleBlur("emergencyNumber")}
                  value={formikProps.values.emergencyNumber}
                  errorMsg={
                    formikProps.errors.emergencyNumber &&
                    formikProps.touched.emergencyNumber &&
                    formikProps.errors.emergencyNumber
                  }
                />
                <FormInput
                  label="Notes"
                  placeholder="Enter notes"
                  linesCount={3}
                  key="notes"
                  value={formikProps.values.notes}
                  onChange={formikProps.handleChange("notes")}
                  onBlur={formikProps.handleBlur("notes")}
                />
              </fieldset>
            </div>

            <div className="flex flex-row-reverse">
              <Button
                btnText={clientId ? "Update" : "Save"}
                onClick={formikProps.handleSubmit}
                disabled={loading}
                loading={loading}
              />
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default ClientForm;
