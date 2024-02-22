import React, { useState } from "react";
//@ts-ignore
import { useMutation } from "@apollo/client";
import client from "@/lib/apolloClient";
import useUserStore from "@/service/store";
import { EntityForm } from "./forms/insert/EntityForm";
import { EntityInput } from "./forms/insert/EntityInput";
import { ADD_ENTITY } from "@/graphql/queries";
import { AddEntityForm } from "./AddEntityModal.interface";
import { EntityDataType } from "@/service/entity.interface";
import { Listbox } from "@headlessui/react";

interface AddEntityProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddEntityModal = (props: AddEntityProps) => {
  const [formData, setFormData] = useState<AddEntityForm>({
    name: "",
    email: "",
    phone: "",
    industry: "",
    contactEmail: ""
  });
  const [entityType, setEntityType] = useState<"COMPANY" | "CONTACT">(
    "CONTACT"
  );
  const setDataListStore = useUserStore((state: any) => state.setDidAdd);
  const dataList = useUserStore((state: any) => state.allData);

  const [addEntity] = useMutation(ADD_ENTITY, {
    client: client
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Check if the provided information already exists in dataList
    const existingEntry = dataList.find((entry: EntityDataType) => {
      if (entityType === "CONTACT") {
        return (
          entry.name === formData.name &&
          entry.email === formData.email &&
          entry.phone === formData.phone
        );
      } else if (entityType === "COMPANY") {
        return (
          entry.name === formData.name &&
          entry.industry === formData.industry &&
          entry.contactEmail === formData.contactEmail
        );
      }
      return false;
    });

    if (existingEntry) {
      // Show error message
      alert("This entity already exists!");
      return;
    }

    try {
      const { data } = await addEntity({
        variables: {
          input: {
            ...formData,
            entityType // Pass the entityType to the mutation
          }
        }
      });
      console.log("Entity added:", data.createEntity);
      setDataListStore();
      props.onClose();
    } catch (error) {
      console.error("Error adding entity:", error);
    }
  };

  return (
    props.isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Add Entity</h2>
            <button
              className="text-gray-500 hover:text-gray-600"
              onClick={props.onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <EntityInput
              label="Name"
              value={formData.name}
              onChange={(value: string) =>
                setFormData({ ...formData, name: value })
              }
              type={"text"}
            />
            <div className="mb-4">
              <label
                htmlFor="entityType"
                className="block text-sm font-medium text-gray-700"
              >
                Entity Type
              </label>
              <Listbox value={entityType} onChange={setEntityType}>
                {({ open }) => (
                  <>
                    <div className="mt-1 relative">
                      <Listbox.Button className="cursor-pointer relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                        <span className="block truncate">
                          {entityType === "COMPANY" ? "Company" : "Contact"}
                        </span>
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 12a1 1 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L10 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A1 1 0 0 1 10 12z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </Listbox.Button>
                      <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-32 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        <Listbox.Option
                          value="CONTACT"
                          className={({ active }) =>
                            `${
                              active
                                ? "text-white bg-blue-600"
                                : "text-gray-900"
                            } cursor-pointer select-none relative py-2 pl-3 pr-9`
                          }
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`${
                                  selected ? "font-medium" : "font-normal"
                                } block truncate`}
                              >
                                Contact
                              </span>
                              {selected ? (
                                <span
                                  className={`${
                                    active ? "text-white" : "text-blue-600"
                                  }
                                    absolute inset-y-0 right-0 flex items-center pr-4`}
                                ></span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                        <Listbox.Option
                          value="COMPANY"
                          className={({ active }) =>
                            `${
                              active
                                ? "text-white bg-blue-600"
                                : "text-gray-900"
                            } cursor-pointer select-none relative py-2 pl-3 pr-9`
                          }
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`${
                                  selected ? "font-medium" : "font-normal"
                                } block truncate`}
                              >
                                Company
                              </span>
                              {selected ? (
                                <span
                                  className={`${
                                    active ? "text-white" : "text-blue-600"
                                  }
                                    absolute inset-y-0 right-0 flex items-center pr-4`}
                                ></span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      </Listbox.Options>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            <EntityForm
              entityType={entityType}
              formData={formData}
              onChange={(key: string, value: string) =>
                setFormData({ ...formData, [key]: value })
              }
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AddEntityModal;
