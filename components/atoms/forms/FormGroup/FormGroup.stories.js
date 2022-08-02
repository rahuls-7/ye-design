import FormGroupComponent from "./FormGroup";

const metadata = {
  component: FormGroupComponent,
};

export default metadata;

const Template = ({ ...args }) => <FormGroupComponent {...args} />;

export const FormGroup = Template.bind({});
FormGroup.args = {
  label: "Form Group Label",
};
