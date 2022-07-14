import NetworkManager from "./NetworkManager";
import { REQUEST_METHODS } from "../constants/generic";
const baseUrl = "https://test-app.atects.com";
const baseUrlApi = `${baseUrl}/api/v1/`;

const { GET } = REQUEST_METHODS;
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
