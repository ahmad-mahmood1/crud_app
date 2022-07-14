import { DataTable } from "../../common";
import { useNavigate } from "react-router-dom";
import { svgIcons, TableActions } from "../../common";
import { ClientsColumns } from "../../../constants/DataTableColumnConfigs";
import { CLIENT_PATH_EDIT } from "../../../constants/appPaths";
import { getTableColumns } from "../../../utils/DataTableHelper";

const ClientsTable = ({ loading, error, listings }) => {
  const navigate = useNavigate();

  const getClientList = () => {
    const list = [];
    listings?.forEach((client) => {
      list.push({
        ID: client.id,
        "First Name": client.first_name || "–",
        "Last Name": client.last_name || "–",
        "Gender": client.gender || "–",
        "Position": client.position || "–",
        "Evaluation": client.evaluation || "–",
        "Starting Date": client.starting_date || "–",
        "Status":
         (
           // <Status
           //   name={client?.status}
           //   color={statusColorMapper(client?.status)}
           // />
           <div>{client?.status}</div>
         ) || "–",
        "Contact Number": client.contact_number || "–",
        "Emergency Number": client.emergency_contact || "–",
        "Notes": client.notes || "–",
        "Actions": (
          <TableActions
            id={client.id}
            actionsList={[
              {
                id: client.id,
                type: "button",
                Icon: svgIcons.MdEdit,
                color: "green",
                tooltipLabel: "Edit",
                onclick: () => {
                  navigate({
                    pathname: CLIENT_PATH_EDIT.replace(":id", client.id),
                  });
                },
              },
              {
                id: client.id,
                type: "button",
                Icon: svgIcons.MdDelete,
                color: "red",
                tooltipLabel: "Delete",
                onclick: () => {},
              },
            ]}
          />
        ),
      });
    });
    return list;
  };
  const updatedClientsList = getClientList();

  let columnsToRender = getTableColumns(updatedClientsList, ClientsColumns);

  return !!error && !loading ? (
    <p>error</p>
  ) : (
    <DataTable
      tableData={updatedClientsList}
      columns={columnsToRender}
      loading={loading}
    />
  );
};
export default ClientsTable;
