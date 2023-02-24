import React from "react";
import { Slide } from "react-toastify";
import { ToastContainer } from "react-toastify";

const ToastMessage = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
  );
};
export default ToastMessage;
