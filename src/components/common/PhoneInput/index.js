import PhoneInput from "react-phone-number-input";
import React from "react";
import "react-phone-number-input/style.css";
import Skeleton from "../Skeleton";
const PhoneIntl = (props) => {
  const {
    label,
    errorMsg,
    labelClassName,
    loading,
    errorType,
    errorClassName,
    placeholder,
    id,
    value,
    setValue,
    textRight,
    textAreaLabelClassName,
    containerClassName,
    left,
    right,
    onChange,
    inputContainerClass,
    defaultCountry,
    ...rest
  } = props;

  const renderLabel = () =>
    label ? (
      <label className="label basis-1/4">
        {loading ? <Skeleton height={24} /> : label}
      </label>
    ) : null;

  const renderInput = () => (
    <PhoneInput
      value={value}
      onChange={onChange}
      defaultCountry={"PK"}
      placeholder={placeholder}
      className="field"
      international
      {...rest}
    />
  );

  return (
    <div className="max-w-lg mb-7 h-16">
      <div className="flex flex-row justify-between items-center">
        {renderLabel()}
        <div className="basis-3/4">
          {renderInput()}
          {!!errorMsg && <p className="errorText">{errorMsg}</p>}
        </div>
      </div>
    </div>
  );
};
export default PhoneIntl;
