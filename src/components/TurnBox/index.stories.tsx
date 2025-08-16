import type { Meta, StoryObj } from "@storybook/react-vite";
import { TurnBox } from "./index";

const meta = {
  title: "components/TurnBox",
  component: TurnBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    turn: {
      score: 1,
      betUsers: [
        { id: "1", name: "Test1", iconColor: 0, iconImage: 0 },
        { id: "2", name: "Test2", iconColor: 1, iconImage: 1 },
        { id: "3", name: "Test3", iconColor: 2, iconImage: 2 },
      ],
    },
  },
} satisfies Meta<typeof TurnBox>;

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

export const ActiveWithFewBetUser: Story = {
  args: {
    active: true,
    turn: {
      score: 1,
      betUsers: [
        { id: "1", name: "Test1", iconColor: 0, iconImage: 0 },
        { id: "2", name: "Test2", iconColor: 1, iconImage: 1 },
      ],
    },
  },
};

export const InactiveWithFewBetUser: Story = {
  args: {
    active: false,
    turn: {
      score: 1,
      betUsers: [
        { id: "1", name: "Test1", iconColor: 0, iconImage: 0 },
        { id: "2", name: "Test2", iconColor: 1, iconImage: 1 },
      ],
    },
  },
};

export const ActiveWithMoreBetUser: Story = {
  args: {
    active: true,
    turn: {
      score: 1,
      betUsers: [
        { id: "1", name: "Test1", iconColor: 0, iconImage: 0 },
        { id: "2", name: "Test2", iconColor: 1, iconImage: 1 },
        { id: "3", name: "Test3", iconColor: 2, iconImage: 2 },
        { id: "4", name: "Test4", iconColor: 3, iconImage: 3 },
      ],
    },
  },
};

export const InactiveWithMoreBetUser: Story = {
  args: {
    active: false,
    turn: {
      score: 1,
      betUsers: [
        { id: "1", name: "Test1", iconColor: 0, iconImage: 0 },
        { id: "2", name: "Test2", iconColor: 1, iconImage: 1 },
        { id: "3", name: "Test3", iconColor: 2, iconImage: 2 },
        { id: "4", name: "Test4", iconColor: 3, iconImage: 3 },
      ],
    },
  },
};
