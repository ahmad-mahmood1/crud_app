import { paramCase } from "change-case";

export const getTableColumns = (data, tableColumns = []) => {
    let columns = [];
    if (data && data.length > 0) {
      const {prettyNames, queryNames} =  tableColumns;
      columns = prettyNames.map((item, index) => {
        const cellTag = item;
        return {
          id: paramCase(cellTag),
          name: item,
          selector: (item) => item,
          key:  item,
          allowOverflow: true,
          sortable: false,
          cell: (row) => (
            <div data-tag="allowRowEvents">
              {row[item] ? row[item] : "-"}
            </div>
          ),
          style: {
            fontSize: 13,
          },
        };
      });
      return columns;
    }
  };