import { Tooltip } from "../";
import { Fragment, useState } from "react";
import React from "react";

const TableActions = ({ actionsList, id }) => {
  const [currentActionHover, setCurrentActionHover] = useState("");
  return (
    <div
      key={id}
      className={
        actionsList.length > 1 ? "flex flex-row justify-between min-h-full" : ""
      }
    >
      {actionsList.map(({ type, Icon, tooltipLabel, onClick, color, id }) => {
        const uniqueKey = `${type}-${tooltipLabel}-${id}`;
        switch (type) {
          case "button":
            return (
              <div key={uniqueKey}>
                {uniqueKey === currentActionHover && (
                  <Tooltip place={"left"} id={uniqueKey}>
                    {tooltipLabel}
                  </Tooltip>
                )}
                <button
                  data-tip
                  data-for={uniqueKey}
                  onClick={onClick}
                  onMouseEnter={() => setCurrentActionHover(uniqueKey)}
                  onMouseLeave={() => {
                    setCurrentActionHover("");
                  }}
                >
                  {!!Icon && <Icon color={color} />}
                </button>
              </div>
            );

          default:
            break;
        }
      })}
    </div>
  );
};

export default TableActions;
