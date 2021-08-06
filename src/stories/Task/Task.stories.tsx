import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Task } from "./Task";

export default {
  title: "Component/Task",
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: {
    id: "01",
    title: "Todo 01",
    state: "TASK_INBOX",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  tasks: {
    id: "01",
    title: "Todo 01",
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  tasks: {
    id: "01",
    title: "Todo 01",
    state: "TASK_ARCHIVED",
  },
};
