import type { Meta, StoryObj } from "@storybook/react-vite";
import { TurnSquare } from "./index";

const meta = {
  title: "components/TurnSquare",
  component: TurnSquare,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { payout: 1 },
} satisfies Meta<typeof TurnSquare>;

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
