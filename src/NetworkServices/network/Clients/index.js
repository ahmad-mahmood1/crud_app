// import NetworkManager from "./NetworkManager";
// import { REQUEST_METHODS } from "../constants/generic";
import NetworkManager from "../../NetworkManager";
import { REQUEST_METHODS } from "../../../constants/generic";
import { parse } from "postcss";
const baseUrl = "https://test-app.atects.com";
const baseUrlApi = `${baseUrl}/api/v1/`;

const { GET, POST } = REQUEST_METHODS;

const clientPayload = (values, clientId) => ({
  ...(clientId && { id: parseInt(clientId) }),
  first_name: values?.firstName,
  last_name: values?.lastName,
  contact_number: values?.contactNumber,
  status: values?.status?.label,
  position: values?.position,
  gender: values?.gender?.label,
  starting_date: values?.startingDate,
  evaluation: values?.evaluation?.label,
  emergency_contact: values?.emergencyContact,
  notes: values?.notes,
});

export const getClientsList = () => {
  return new Promise((resolve, reject) => {
    let url = `${baseUrlApi}getAllEmployees`;
    NetworkManager.performRequest(url, null, GET)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getClientDetail = (clientId) => {
  return new Promise((resolve, reject) => {
    let url = `${baseUrlApi}getSingleEmployee`;
    NetworkManager.performRequest(url, { id: parseInt(clientId) }, POST)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const addClient = (values) => {
  return new Promise((resolve, reject) => {
    let url = `${baseUrlApi}insertEmployee`;
    NetworkManager.performRequest(url, clientPayload(values), POST)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateClient = (clinetId, values) => {
  return new Promise((resolve, reject) => {
    let url = `${baseUrlApi}updateEmployee`;
    NetworkManager.performRequest(url, clientPayload(values, clinetId), POST)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteClient = (clientId) => {
  return new Promise((resolve, reject) => {
    let url = `${baseUrlApi}deleteEmployee`;
    NetworkManager.performRequest(url, { id: clientId }, POST)
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
