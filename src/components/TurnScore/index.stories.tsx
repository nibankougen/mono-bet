import type { Meta, StoryObj } from "@storybook/react-vite";
import { TurnScore } from "./index";

const meta = {
  title: "components/TurnScore",
  component: TurnScore,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { score: 1 },
} satisfies Meta<typeof TurnScore>;

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
