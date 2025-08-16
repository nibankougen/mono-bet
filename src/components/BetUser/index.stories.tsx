import type { Meta, StoryObj } from "@storybook/react-vite";
import { BetUser, type BetUserProps } from "./index";

const BetUserWrapper = ({ active, user }: BetUserProps) => {
  return (
    <div className="max-w-[300px]">
      <BetUser active={active} user={user} />
    </div>
  )
}

const meta = {
  title: "components/BetUser",
  component: BetUserWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { user: { id: "1", name: "Test name", iconColor: 0, iconImage: 0 } },
} satisfies Meta<typeof BetUser>;

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
