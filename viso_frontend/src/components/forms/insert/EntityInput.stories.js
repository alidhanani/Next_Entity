import React from "react";
import { EntityInput } from "./EntityInput";

export default {
  title: "Components/EntityInput",
  component: EntityInput
};

const Template = (args) => <EntityInput {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  label: "Name",
  value: "",
  onChange: () => {}
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: "Email",
  value: "",
  onChange: () => {},
  type: "email"
};

export const PhoneInput = Template.bind({});
PhoneInput.args = {
  label: "Phone",
  value: "",
  onChange: () => {},
  type: "tel"
};
