import React from "react";

const AppLayout = (props) => {
  const { children } = props;

  return (
    <div className="m-4">
      <div className="">{children}</div>
    </div>
  );
};

export default AppLayout;
