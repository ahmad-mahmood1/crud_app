import React from "react";

const Button = (props) => {
  const {
    className,
    color = "blue",
    variant = "pill",
    icon = null,
    iconPlacement = "left",
    btnText = "Select",
    ...rest
  } = props;

  return (
    <>
      <button
        className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4 rounded-full`}
        type="button"
        {...rest}
      >
        {iconPlacement == "left" && icon}
        {btnText}
        {iconPlacement == "right" && icon}
      </button>
    </>
  );
};

export default Button;
