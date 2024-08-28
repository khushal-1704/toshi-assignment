import React from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  onClose?: () => void;
  isOpen?: boolean;
}

const Sidebar: React.FC<Props> = ({ onClose, isOpen }) => {
    const { pathname } = useLocation();
  return (
    <div className="h-full relative px-3 py-4 overflow-y-auto bg-gray-50 z-50 dark:bg-gray-800">
      <div className="flex items-center ps-2.5 mb-5">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-6 me-3 sm:h-7"
          alt="Flowbite Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Contact & Map
        </span>
        {isOpen && (
          <span className="absolute right-3">
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
          </span>
        )}
      </div>
      <ul className="space-y-2 font-medium">
        <li>
          <Link
            to={"/"}
            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
              pathname === "/" ? "bg-gray-700" : ""
            }`}
            onClick={onClose}
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
            </svg>
            <span className="ms-3">Contacts</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/map"}
            className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${
              pathname === "/map" ? "bg-gray-700" : ""
            }`}
            onClick={onClose}
          >
            <svg
              className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
              <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">
              Charts and Maps
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
