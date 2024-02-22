import { EntityDataType } from "@/service/entity.interface";
import React from "react";

interface CompanyTableProps {
  companies: EntityDataType[];
  openModalUpdate: (data: EntityDataType) => void;
}

const CompanyTable = (props: CompanyTableProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full table-auto border border-gray-200 rounded shadow-md">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-200">
            <th className="px-6 py-3 text-left font-semibold text-gray-700">
              Name
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">
              Industry
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">
              Contact Email
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {props.companies.map((company: EntityDataType) => (
            <tr key={company.id} className="border-b border-gray-200">
              <td className="px-6 py-4 whitespace-nowrap">{company.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {company.industry}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {company.contactEmail}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => props.openModalUpdate(company)}
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

export default CompanyTable;
