import { IoMdArrowDropdown } from "../svg-icons";
import React from "react";
import Select from "react-select";

const SelectComponent = (props) => {
  const {
    label,
    className,
    inputRef,
    getOptionLabel = (op) => op.name || op.label,
    getOptionValue = (op) => op.id || op.value || op.slug,
    portal = false,
  } = props;

  const customStyles = {
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    control: (provided, { isFocused, isMenuOpen }) => ({
      ...provided,
      boxShadow: "none",
      minHeight: "px-42",
      borderColor: isFocused ? "#0f172a" : "#efefef",
      "&:hover": {
        borderColor: isMenuOpen ? "#0f172a" : "",
      },
      borderWidth: "2px",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      width: "2.125rem",
      justifyContent: "center",
      fontSize: "1.5rem",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "2px 5px",
      justifyContent: "start",
      "textColor": "#0f172a",
    }),
    menu: (provided) => ({
      ...provided,
      width: "100%",
      zIndex: 2,
    }),
    menuList: (provided) => ({
      ...provided,
      justifyContent: "start",
    }),

    option: (provided, { isSelected, isFocused }) => {
      //   const color = chroma(primaryColor);
      return {
        ...provided,
        backgroundColor: isSelected
          ? "#3b82f6"
          : isFocused
          ? "#93c5fd"
          : undefined,
      };
    },
  };

  const DropdownIndicator = () => {
    return props.isDisabled ? null : <IoMdArrowDropdown />;
  };

  return (
    <div className="max-w-lg mb-7 h-16">
      <div className="flex flex-row justify-between">
        {label && <label className="label basis-1/4 ">{label}</label>}
        <div className="basis-3/4">
          <Select
            ref={inputRef}
            classNamePrefix="select"
            styles={customStyles}
            components={{ DropdownIndicator }}
            menuPlacement="auto"
            getOptionLabel={getOptionLabel}
            getOptionValue={getOptionValue}
            menuPortalTarget={portal ? document.body : undefined}
            {...props}
          />
          {!!props.errorMsg && <p className="errorText">{props.errorMsg}</p>}
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
