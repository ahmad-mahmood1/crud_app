import React, { forwardRef } from "react";

import DateSelect from "react-datepicker";

import moment from "moment";
import Skeleton from "../Skeleton";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = (props) => {
  const {
    placeholder,
    selected,
    onChange,
    errorMsg,
    loading,
    canUpdate,
    label,
    canClear,
    labelClass,
    dateFormat,
    timezone = "Asia/Karachi",
    ...rest
  } = props;

  const CustomInput = forwardRef((inputProps, ref) => {
    let date = props.dateFormat
      ? `${moment(inputProps.value).format(props.dateFormat)}`
      : inputProps.value;

    return (
      <input
        {...inputProps}
        onClick={inputProps.onClick}
        value={date}
        type="text"
        readOnly={true}
        ref={ref}
        className="field min-w-full text-slate-900"
      />
    );
  });

  const setLocalZone = (date, timezone) => {
    const dateWithoutZone = moment
      .tz(date, timezone)
      .format("YYYY-MM-DDTHH:mm:ss.SSS");
    const localZone = moment(dateWithoutZone).format("Z");
    const dateWithLocalZone = [dateWithoutZone, localZone].join("");

    return new Date(dateWithLocalZone);
  };

  const setOtherZone = (date, timezone) => {
    const dateWithoutZone = moment(date).format("YYYY-MM-DDTHH:mm:ss.SSS");
    const otherZone = moment.tz(date, timezone).format("Z");
    const dateWithOtherZone = [dateWithoutZone, otherZone].join("");

    return new Date(dateWithOtherZone);
  };

  const renderLabel = () =>
    label ? (
      <label className="label basis-1/4">
        {loading ? <Skeleton height={20} /> : label}
      </label>
    ) : null;

  const renderDateSelect = () => (
    <DateSelect
      selected={selected ? selected : null}
      placeholderText={placeholder}
      dateFormat={dateFormat ? dateFormat : "d MMMM, yy"}
      maxDate={props.maxDate}
      onChange={(date) => {
        onChange(date);
      }}
      customInput={<CustomInput />}
      portalId="root"
      {...rest}
    />
  );

  const renderComponent = () =>
    loading ? (
      <Skeleton height={30} />
    ) : (
      <>
        {/* {showIcon && <MdDateRange />} */}
        {renderDateSelect()}
      </>
    );

  return (
    <div className="max-w-lg mb-7 h-16">
      <div className="flex flex-row">
        {renderLabel()}
        <div className="basis-3/4">
          {renderComponent()}
          {!!errorMsg && <p className="errorText">{errorMsg}</p>}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
