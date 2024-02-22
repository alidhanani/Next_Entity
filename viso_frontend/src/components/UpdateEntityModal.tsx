import { FormEvent, useEffect, useState } from "react";
//@ts-ignore
import { useMutation } from "@apollo/client";
import client from "@/lib/apolloClient";
import useUserStore from "@/service/store";
import { UPDATE_ENTITY } from "@/graphql/queries";
import { EntityForm } from "./forms/update/EntityForm";
import { EntityInput } from "./forms/update/EntityInput";
import { UpdateEntityForm } from "./UpdateEntityModal.interface";
import { EntityDataType } from "@/service/entity.interface";

interface UpdateEntityProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdateEntityModal = (props: UpdateEntityProps) => {
  const [id, setID] = useState();
  const [formData, setFormData] = useState<UpdateEntityForm>({
    name: "",
    email: "",
    phone: "",
    industry: "",
    contactEmail: ""
  });
  const [entityType, setEntityType] = useState<"COMPANY" | "CONTACT">(
    "CONTACT"
  ); // Default value
  const didUData = useUserStore((state: any) => state.dataList);
  const alLDataList = useUserStore((state: any) => state.allData);

  useEffect(() => {
    console.log(didUData);

    setID(didUData.id);
    setFormData({
      name: didUData.name,
      email: didUData.email ? didUData.email : didUData.contactEmail,
      phone: didUData.phone,
      industry: didUData.industry,
      contactEmail: didUData.contactEmail
    });
    setEntityType(didUData.__typename === "Company" ? "COMPANY" : "CONTACT");
  }, [didUData.id]);

  const [updateEntity] = useMutation(UPDATE_ENTITY, {
    client: client
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Check if the provided information is the same as the existing data
    const existingEntry = alLDataList.find((entry: EntityDataType) => {
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
      alert("The updated entity data is the same as the existing data!");
      return;
    }

    try {
      const { data } = await updateEntity({
        variables: {
          input: {
            id,
            name: formData.name,
            email: entityType === "CONTACT" ? formData.email : undefined,
            phone: entityType === "CONTACT" ? formData.phone : undefined,
            industry: entityType === "COMPANY" ? formData.industry : undefined,
            contactEmail:
              entityType === "COMPANY" ? formData.contactEmail : undefined,
            entityType
          }
        }
      });
      console.log("Entity updated:", data.updateEntity);
      props.onClose();
    } catch (error) {
      console.error("Error updating entity:", error);
    }
  };

  return (
    props.isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Update Entity
            </h2>
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
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default UpdateEntityModal;
