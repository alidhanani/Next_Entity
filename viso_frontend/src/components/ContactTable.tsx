import { EntityDataType } from "@/service/entity.interface";
import React from "react";

interface ContactTableProps {
  contacts: EntityDataType[];
  openModalUpdate: (data: EntityDataType) => void;
}

const ContactTable = (props: ContactTableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto border border-gray-200 rounded shadow-md">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            <th className="px-6 py-3 text-left font-semibold text-gray-700">
              Name
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">
              Email
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">
              Phone
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {props.contacts.map((contact: EntityDataType) => (
            <tr key={contact.id} className="border-b border-gray-200">
              <td className="px-6 py-4 whitespace-nowrap">{contact.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{contact.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => props.openModalUpdate(contact)}
                  className="text-blue-500 hover:text-blue-600 mr-2"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;
