import React from "react";
import { useParams } from "react-router";
import ClientForm from "../../components/forms/clientForm";

const SaveClient = (props) => {
  const { id } = useParams();
  return (
    <div className={"mx-52"}>
      <ClientForm {...props} clientId={id} />
    </div>
  );
};

export default SaveClient;
