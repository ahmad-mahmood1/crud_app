import axios from "axios";

export const getHeaders = () => {
  return {
    Authorization: "Bearer SCpZSEpVSEc4XiY5YU1LSW9ubzA4SEg2N2ZnJSZ2",
  };
};

const TIMEOUT = 90 * 1000;

export default class NetworkManager {
  static performRequest(url, data, type, setHeaders = true) {
    let config = {
      method: type,
      url: url,
      ...(data && { data: data }),
      ...(setHeaders ? { headers: getHeaders() } : {}),
    };

    return new Promise((resolve, reject) => {
      axios(config, {
        timeout: TIMEOUT,
      })
        .then((response) => {
          resolve(response);
          console.log(response);
        })
        .catch((error) => {
          reject({ errorMsg: error.msg });
        });
    });
  }
}
