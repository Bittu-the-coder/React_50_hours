import React, { useState } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShow(true)}
        className="m-2 p-2 bg-black rounded-lg text-white shadow-lg"
      >
        Show Modal
      </button>
      {show && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <button
              className="absolute text-3xl text-red-800 top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShow(false)}
            >
              &times;
            </button>
            <div className="mt-4">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
