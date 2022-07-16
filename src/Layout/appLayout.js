import React from "react";

const AppLayout = (props) => {
  const { children } = props;

  return <div className="m-4">{children}</div>;
};

export default AppLayout;
