import { UpdateEntityForm } from "@/components/UpdateEntityModal.interface";
import { EntityInput } from "./EntityInput";

interface EntityFormProps {
  entityType: "COMPANY" | "CONTACT";
  formData: UpdateEntityForm;
  onChange: any;
}

export const EntityForm = (props: EntityFormProps) => {
  return (
    <>
      {props.entityType === "CONTACT" && (
        <>
          <EntityInput
            label="Email"
            value={props.formData.email}
            onChange={(value: any) => props.onChange("email", value)}
            type="email"
          />
          <EntityInput
            label="Phone"
            value={props.formData.phone}
            onChange={(value: any) => props.onChange("phone", value)}
            type={"text"}
          />
        </>
      )}
      {props.entityType === "COMPANY" && (
        <>
          <EntityInput
            label="Industry"
            value={props.formData.industry}
            onChange={(value: any) => props.onChange("industry", value)}
            type={"text"}
          />
          <EntityInput
            label="Contact Email"
            value={props.formData.contactEmail}
            onChange={(value: any) => props.onChange("contactEmail", value)}
            type="email"
          />
        </>
      )}
    </>
  );
};
