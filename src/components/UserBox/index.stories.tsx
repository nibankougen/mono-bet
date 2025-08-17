import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserBox } from "./index";

const meta = {
  title: "components/UserBox",
  component: UserBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    user: { id: "1", name: "Test name", iconColor: 0, iconImage: 0 },
    score: 1,
  },
} satisfies Meta<typeof UserBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    active: true,
  },
};

export const Inactive: Story = {
  args: {
    active: false,
  },
};
