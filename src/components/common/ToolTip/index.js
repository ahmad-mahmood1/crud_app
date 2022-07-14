import React from "react";
import ReactTooltip from "react-tooltip";

const Tooltip = ({ children, ...rest }) => <ReactTooltip {...rest}>{children}</ReactTooltip>;

export default Tooltip;
