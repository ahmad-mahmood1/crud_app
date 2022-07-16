import React from "react";
import Skeleton from "../Skeleton";

const FormInput = (props) => {
  const {
    label,
    linesCount,
    errorMsg,
    labelClassName,
    loading,
    left,
    id,
    placeholder,
    ...rest
  } = props;

  const renderLabel = () =>
    label ? (
      <label className="label basis-1/4">
        {loading ? <Skeleton height={24} /> : label}
      </label>
    ) : null;

  const renderInput = () =>
    loading ? (
      <Skeleton height={30} />
    ) : (
      <input
        className="field"
        placeholder={placeholder ? placeholder : "Enter Value"}
        {...rest}
      />
    );

  const renderTextArea = () =>
    loading ? (
      <Skeleton height={90} />
    ) : (
      <textarea
        className="field"
        rows={linesCount}
        placeholder={placeholder ? placeholder : "Enter Value"}
        {...rest}
      />
    );

  return (
    <>
      <div className="max-w-lg mb-7 h-16">
        <div className="flex flex-row justify-between">
          {renderLabel()}
          <div className="basis-3/4">
            {linesCount && linesCount > 1 ? renderTextArea() : renderInput()}
            {!!errorMsg && <p className="errorText">{errorMsg}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormInput;
