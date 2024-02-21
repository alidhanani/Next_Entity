import React from "react";
import { EntityForm } from "./EntityForm";

export default {
  title: "Components/EntityForm",
  component: EntityForm
};

const Template = (args) => <EntityForm {...args} />;

export const ContactForm = Template.bind({});
ContactForm.args = {
  entityType: "CONTACT",
  formData: {
    email: "",
    phone: ""
  },
  onChange: () => {}
};

export const CompanyForm = Template.bind({});
CompanyForm.args = {
  entityType: "COMPANY",
  formData: {
    industry: "",
    contactEmail: ""
  },
  onChange: () => {}
};
