import type { ReactNode } from "react";

const ModalTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800">{children}</h2>
    </div>
  );
};

const ModalBody = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-2">
      <p className="text-gray-600 text-sm">{children}</p>
    </div>
  );
};

const ModalFooter = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mt-4 flex justify-end space-x-2">
      <div>{children}</div>
    </div>
  );
};

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[20rem]">{children}</div>
    </div>
  );
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
