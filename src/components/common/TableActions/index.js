import { Tooltip } from "../";
import { Fragment, useState } from "react";
import React from "react";

const TableActions = ({ actionsList, id }) => {
  const [currentActionHover, setCurrentActionHover] = useState("");
  return (
    <div
      key={id}
      className={
        actionsList.length > 1 ? "justify-content-left align-item-center" : ""
      }
    >
      {actionsList.map(({ type, Icon, tooltipLabel, onClick, color, id }) => {
        const uniqueKey = `${type}-${tooltipLabel}-${id}`;
        switch (type) {
          case "button":
            return (
              <Fragment key={uniqueKey}>
                {uniqueKey===currentActionHover && (
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
                    setCurrentActionHover('');
                    // setTimeout(() => showTooltip(true), 50);
                  }}
                >
                  {!!Icon && <Icon color={color} />}
                </button>
              </Fragment>
            );

          default:
            break;
        }
      })}
    </div>
  );
};

export default TableActions;
