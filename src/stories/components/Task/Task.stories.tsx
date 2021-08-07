import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Task } from "./Task";

export default {
  title: "Component/Task",
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "01",
    title: "Todo 01",
    activeState: false,
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: "01",
    title: "Todo 01",
    activeState: true,
  },
};

// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     id: "01",
//     title: "Todo 01",
//     state: "TASK_ARCHIVED",
//     activeState: false,
//   },
// };
