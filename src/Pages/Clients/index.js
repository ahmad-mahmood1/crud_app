import React, { useEffect, useState } from "react";
import ClientsTable from "../../components/Clients/ClientsTable";
import { Button } from "../../components/common";
import { getClientsList } from "../../NetworkServices/ApiBuilder";

export const Clients = (props) => {
  const [clients, setClients] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchClients = async () => {
    setLoading(true);
    const response = await getClientsList();
    setLoading(false);

    if (response.errorMsg) {
      setError(response.errorMsg);
    } else setClients(response);
  };
  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <>
      <Button btnText={"Add Client"} />
      <ClientsTable listings={clients} error={error} loading={loading} />
    </>
  );
};
