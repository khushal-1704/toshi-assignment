// src/components/ReactPortal.js
import React, { useEffect } from "react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, handleClose }) => {
  //close modal on escape click
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      e.key === "Escape" ? handleClose() : null;
    };
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div className="fixed left-0 top-0 z-[99] h-screen w-full bg-[#333333] opacity-50" />
      <div
        className="fixed left-0  top-0 z-[99] flex h-screen w-full items-center justify-center"
        onClick={(e) => {
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
