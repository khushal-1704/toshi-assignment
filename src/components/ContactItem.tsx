import React from "react";

import { ContactType } from "../types";

import Button from "./Common/Button";

interface ContactItemProps {
  contact: ContactType;
  onContactEditClick: (contactId: ContactType) => void;
  onContactDeleteClick: (contactId: ContactType) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  onContactDeleteClick,
  onContactEditClick,
}) => {
  return (
    <div className="max-w-sm text-sm lg:text-lg  p-6 mr-2 mb-2 bg-white text-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <div className="flex m-1">
          <span className="font-medium mr-2 ">
            First Name:
          </span>
          <span className="">{contact.firstName}</span>
        </div>
        <div className="flex m-1">
          <span className="font-medium mr-2 ">
            Last Name:
          </span>
          <span className="">{contact.lastName}</span>
        </div>
        <div className="flex m-1 ">
          <span className="font-medium mr-2">Is Active:</span>
          <span>{contact.status ? "Active" : "Inactive"}</span>
        </div>
      </div>
      <div className="mt-4">
        <Button onClick={() => onContactEditClick(contact)}>Edit</Button>
        <Button
          onClick={() => onContactDeleteClick(contact)}
          buttonStyling="bg-red-700 hover:bg-red-400"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ContactItem;
