import React from "react";
import { TailSpin } from "react-loader-spinner";
const Button = (props) => {
  const {
    className,
    icon = null,
    iconPlacement = "left",
    btnText = "Select",
    ...rest
  } = props;
  return (
    <>
      <button
        className={`bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full`}
        type="button"
        {...rest}
      >
        <div className="flex flex-row items-center justify-between">
          {iconPlacement === "left" && (props.loading ? <TailSpin color="#94a3b8" width="16" height="16"/> : icon)}
          {btnText}
          {iconPlacement === "right" && icon}
        </div>
      </button>
    </>
  );
};

export default Button;
