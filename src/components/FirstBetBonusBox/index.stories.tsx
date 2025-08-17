import type { Meta, StoryObj } from "@storybook/react-vite";
import { FirstBetBonusBox } from "./index";

const meta = {
  title: "components/FirstBetBonusBox",
  component: FirstBetBonusBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { score: 10 },
} satisfies Meta<typeof FirstBetBonusBox>;

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
