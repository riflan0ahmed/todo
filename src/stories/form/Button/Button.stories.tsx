import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Btn } from "./Button";

export default {
  title: "Form/Button",
  component: Btn,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Btn>;

const Template: ComponentStory<typeof Btn> = (args) => <Btn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
