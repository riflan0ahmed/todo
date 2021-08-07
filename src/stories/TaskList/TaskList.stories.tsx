import { TaskList } from "./TaskList";
import * as TaskStories from "./Task/Task.stories";
import { ComponentStory } from "@storybook/react";

export default {
  component: TaskList,
  title: "Component/TaskList",
  //   decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
};

const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks: [{ ...TaskStories.Default.args?.task, id: "1", title: "Task 01" }],
} as any;

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [{ id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" }] as any,
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
