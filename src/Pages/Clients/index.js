import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ClientsTable from "../../components/Clients/ClientsTable";
import { Button, Toast } from "../../components/common";
import { CLIENTS_PATH_NEW } from "../../constants/appPaths";
import { MdAdd } from "../../components/common/svg-icons";
import network from "../../NetworkServices/network";

const Clients = (props) => {
  const [clients, setClients] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const fetchClients = async () => {
    const response = await network.getClientsList();
    setLoading(false);

    if (response.errorMsg) {
      setError(response.errorMsg);
    } else setClients(response);
  };
  useEffect(() => {
    fetchClients();
  }, []);

  const onDeleteClient = async (clientId) => {
    const deleteClientResponse = await network.deleteClient(clientId);

    if (deleteClientResponse.errorMsg) {
      Toast.error(deleteClientResponse.errorMsg);
    } else {
      setClients(clients.filter((client) => client.id !== clientId));
      Toast.success("Client Deleted Successfully");
    }
  };

  return (
    <>
      <div className="flex flex-row-reverse">
        <Button
          btnText={"Add Client"}
          onClick={() => navigate(CLIENTS_PATH_NEW)}
          icon={<MdAdd />}
        />
      </div>
      <ClientsTable
        listings={clients}
        error={error}
        onDeleteClient={onDeleteClient}
        loading={loading}
      />
    </>
  );
};
export default Clients;
