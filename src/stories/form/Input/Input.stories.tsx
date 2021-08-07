import { Input } from "./Input";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Form/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const SimpleInput = Template.bind({});
SimpleInput.args = {
  value: "",
  label: "Placeholder",
};
