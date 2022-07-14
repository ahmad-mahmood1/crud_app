import React from "react";
import DataTable from "react-data-table-component";
import Skeleton from "../Skeleton";

const DataTableComponent = (props) => {
  const {
    tableData,
    columns,
    headerText,
    tableRootClass = "",
    limitPerPage,
    loading,
    ...rest
  } = props;
  const TableLoader = () => (
    <div className="d-flex flex-column w-100">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
        <div
          className="d-flex flex-row justify-content-between border-bottom"
          key={e}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
            <div className={`ml-2 mr-2 ${e === 1 ? "mt-2" : "mt-1"}`} key={i}>
              <div className="d-flex flex-row mb-3 mt-1" key={i}>
                <Skeleton height={21} width={90} className="ml-1 mt-3" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="card">
      <div>
        <DataTable
          columns={columns}
          data={tableData}
          striped={true}
          center={true}
          persistTableHead
          responsive
          fixedHeader
          style={{
            borderLeftWidth: "1px",
            borderRightWidth: "1px",
            borderTopWidth: "1px",
            borderBottomWidth: "0px",
            borderTopColor: "#DCDCDC",
            borderLeftColor: "#DCDCDC",
            borderRightColor: "#DCDCDC",
            borderStyle: "solid",
          }}
          pointerOnHover
          highlightOnHover
          progressPending={loading}
          progressComponent={<TableLoader />}
          {...rest}
        />
      </div>
    </div>
  );
};

export default DataTableComponent;
