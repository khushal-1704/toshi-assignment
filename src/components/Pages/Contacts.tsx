import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Utils
import { ContactType } from "../../types";
import { RootState } from "../../store";
import { removeContacts } from "../../store/slices/contact";

//Component
import CreateContactModal from "../CreateContactModal";
import ContactDeleteModal from "../ContactDeleteModal";
import Button from "../Common/Button";
import ContactItem from "../ContactItem";


const Contacts = () => {
  const [isConModalOpen, setIsConModalOpen] = useState<boolean>(false);
  const [isDelModalOpen, setIsDelModalOpen] = useState<boolean>(false);
  const [activeContact, setActiveContact] = useState<ContactType | undefined>();
  const { contacts } = useSelector((state: RootState) => state.contact);
  const dispatch = useDispatch();

  //Reset Active id
  const resetActiveId = () => {
    setIsConModalOpen(false);
    setIsDelModalOpen(false);
    setActiveContact(undefined);
  };

  //Delete Contact
  const handleContactDeleteClick = () => {
    if (activeContact) {
      dispatch(removeContacts(activeContact?.key));
      resetActiveId();
    }
  };

  //Delete Confirmation Modal
  const handleDeletePress = (contactData: ContactType) => {
    setActiveContact(contactData);
    setIsDelModalOpen(true);
  };

  //Edit Modal
  const handleEditPress = (contactData: ContactType) => {
    setActiveContact(contactData);
    setIsConModalOpen(true);
  };

  return (
    <>
      <div className="h-full w-full">
        {/* Modal to Create and Edit Contact */}
        <CreateContactModal
          isOpen={isConModalOpen}
          onClose={resetActiveId}
          contact={activeContact}
          resetActiveContact={resetActiveId}
        />
        {/* Modal to Delete the Contact */}
        <ContactDeleteModal
          isOpen={isDelModalOpen}
          onClose={resetActiveId}
          handleConDelete={handleContactDeleteClick}
        />
        <div>
          <Button onClick={() => setIsConModalOpen(true)}>
            Create Contact
          </Button>
          {contacts.length === 0 && (
            <div className="flex items-center max-w-sm p-6  border rounded-lg shadow bg-gray-800 border-gray-700 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-20 mx-3 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="text-lg text-white ml-3">
                No Contact found Please add contact from Create Contact Button
              </span>
            </div>
          )}
          <div>
            {contacts.length > 0 &&
              contacts.map((contact:ContactType) => (
                <ContactItem
                  contact={contact}
                  key={contact.key}
                  onContactDeleteClick={handleDeletePress}
                  onContactEditClick={handleEditPress}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
