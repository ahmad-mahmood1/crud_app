import { toast } from "react-toastify";

const renderToast =
  (type) =>
  (
    msg,
    // options = {
    //   // position: toast.POSITION.TOP_RIGHT,
    //   // autoClose: 5000,
    //   // hideProgressBar: true,
    // }
  ) => {
    console.log("===toasin")
    toast?.[type](msg);
    return;
  };
const Toast = {
  error: renderToast("error"),
  success: renderToast("success"),
  info: renderToast("info"),
};

export default Toast;
