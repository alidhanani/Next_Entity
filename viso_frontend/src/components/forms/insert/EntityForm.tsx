import { EntityInput } from "./EntityInput";

export const EntityForm = ({ entityType, formData, onChange }) => {
  return (
    <>
      {entityType === "CONTACT" && (
        <>
          <EntityInput
            label="Email"
            value={formData.email}
            onChange={(value) => onChange("email", value)}
            type="email"
          />
          <EntityInput
            label="Phone"
            value={formData.phone}
            onChange={(value) => onChange("phone", value)}
          />
        </>
      )}
      {entityType === "COMPANY" && (
        <>
          <EntityInput
            label="Industry"
            value={formData.industry}
            onChange={(value) => onChange("industry", value)}
          />
          <EntityInput
            label="Contact Email"
            value={formData.contactEmail}
            onChange={(value) => onChange("contactEmail", value)}
            type="email"
          />
        </>
      )}
    </>
  );
};
