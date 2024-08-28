import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { ContactType } from "../types";

import { addContacts, updateContact } from "../store/slices/contact";

import Modal from "./Common/Modal";
import Button from "./Common/Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  contact?: ContactType;
  resetActiveContact: () => void
};

const DefaultContact = {
  firstName: "",
  lastName: "",
  key: 0,
  status: true,
};

const CreateContactModal: React.FC<Props> = ({
  isOpen,
  onClose,
  contact = DefaultContact,
  resetActiveContact
}) => {
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState<ContactType>(contact);
  const [error, setError] = useState("");

  useEffect(() => {
    if (contact.key) {
      setNewContact(contact);
    }
  }, [contact]);

  const createNewContactClick = () => {
    if (!newContact.firstName || !newContact.lastName) {
      setError("Please Enter Full Name");
      return;
    }
    dispatch(addContacts({ ...newContact, key: Date.now() }));
    setError("");
    onClose();
    setNewContact(DefaultContact);
  };

  const handleStatusSet = (status: boolean) => {
    setNewContact({ ...newContact, status });
  };

  const updateContactClick = () => {
    dispatch(updateContact(newContact));
    setError("");
    onClose();
    setNewContact(DefaultContact);
    resetActiveContact()
  };

  return (
    <Modal isOpen={isOpen} handleClose={onClose}>
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative rounded-lg shadow bg-white">
          <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
              <h3 className="text-xl font-semibold">Create Contact</h3>
            </div>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
              data-modal-hide="default-modal"
              onClick={onClose}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="px-4 py-2 md:py-2 md:px-5 ">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-black"
              >
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder="First Name"
                required
                value={newContact.firstName}
                onChange={(e) =>
                  setNewContact({ ...newContact, firstName: e.target.value })
                }
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-black"
              >
                Last Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                placeholder="Last Name"
                required
                value={newContact.lastName}
                onChange={(e) =>
                  setNewContact({ ...newContact, lastName: e.target.value })
                }
              />
            </div>
            {error && (
              <span className="text-red-600 text-sm font-medium">{error}</span>
            )}
            <div className="flex justify-center items-center mt-6">
              <div>
                <span className="text-sm font-medium text-black">Status :</span>
              </div>
              <div className="flex flex-col ml-4">
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    value=""
                    checked={newContact.status}
                    name="active-radio"
                    className="w-4 h-4 text-gray-600 bg-gray-100 focus:outline-none border-gray-300 focus:ring-2 "
                    onChange={(e) => e.target.checked && handleStatusSet(true)}
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    Active
                  </label>
                </div>
                <div className="flex items-center mt-2">
                  <input
                    type="radio"
                    value=""
                    checked={!newContact.status}
                    name="inactive-radio"
                    className="w-4 h-4 text-gray-600 bg-gray-100 focus:outline-none border-gray-300 focus:ring-2 "
                    onChange={(e) => e.target.checked && handleStatusSet(false)}
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    Inactive
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 md:p-5 rounded-b border-gray-600">
            {contact.key ? (
              <Button onClick={updateContactClick}>Update Contact</Button>
            ) : (
              <Button onClick={createNewContactClick}>Create Contact</Button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateContactModal;
