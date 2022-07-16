import { DataTable } from "../../common";
import { useNavigate } from "react-router-dom";
import { TableActions } from "../../common";
import { MdEdit, MdDelete } from "../../common/svg-icons";
import { ClientsColumns } from "../../../constants/DataTableColumnConfigs";
import { CLIENT_PATH_EDIT } from "../../../constants/appPaths";
import { getTableColumns } from "../../../utils/DataTableHelper";
import moment from "moment";

const ClientsTable = ({ loading, error, listings, onDeleteClient }) => {
  const navigate = useNavigate();

  const getClientList = () => {
    const list = [];
    listings?.forEach((client) => {
      list.push({
        ID: client.id,
        "First Name": client.first_name || "–",
        "Last Name": client.last_name || "–",
        Gender: client.gender || "–",
        Position: client.position || "–",
        Evaluation: client.evaluation || "–",
        "Starting Date":
          moment(client.starting_date).format("MMM-DD,YY") || "–",
        Status: <div>{client?.status}</div> || "–",
        "Contact Number": client.contact_number || "–",
        "Emergency Number": client.emergency_contact || "–",
        Notes: client.notes || "–",
        ["Actions"]: (
          <TableActions
            id={client.id}
            actionsList={[
              {
                id: client.id,
                type: "button",
                Icon: MdEdit,
                color: "green",
                tooltipLabel: "Edit",
                onClick: () => {
                  navigate({
                    pathname: CLIENT_PATH_EDIT.replace(":id", client.id),
                  });
                },
              },
              {
                id: client.id,
                type: "button",
                Icon: MdDelete,
                color: "red",
                tooltipLabel: "Delete",
                onClick: () => {
                  onDeleteClient(client.id);
                },
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
      onRowClicked={(row) => navigate(CLIENT_PATH_EDIT.replace(":id", row.ID))}
    />
  );
};
export default ClientsTable;
