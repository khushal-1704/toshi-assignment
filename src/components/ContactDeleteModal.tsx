import React from "react";
import Modal from "./Common/Modal";
import Button from "./Common/Button";

interface ContactDelProp {
  isOpen: boolean;
  onClose: () => void;
  handleConDelete: () => void;
}

const ContactDeleteModal: React.FC<ContactDelProp> = ({
  isOpen,
  onClose,
  handleConDelete,
}) => {
    const handleConfirmClick = () => {
        handleConDelete()
        onClose()
    }
  return (
    <Modal handleClose={onClose} isOpen={isOpen}>
      <div className="w-[300px] flex flex-col items-center justify-center p-6  border rounded-lg text-white shadow bg-gray-800 border-gray-700">
        <div className="text-lg mb-2">Are you Sure ?</div>
        <div className="my-4">
          <Button
            onClick={handleConfirmClick}
            buttonStyling="mr-4"
          >
            Yes
          </Button>
          <Button onClick={onClose}>
            No
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ContactDeleteModal;
