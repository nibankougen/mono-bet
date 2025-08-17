import type { Meta, StoryObj } from "@storybook/react-vite";
import { TurnOverviewBox, type TurnOverviewBoxProps } from "./index";

const TurnOverviewBoxStorybook = ({
  turn,
  hasFirstBetBonus,
}: TurnOverviewBoxProps) => {
  return (
    <div className="grid grid-cols-[auto_auto_1fr] gap-[8px]">
      <TurnOverviewBox
        turn={turn}
        hasFirstBetBonus={hasFirstBetBonus}
      />
    </div>
  );
};

const meta = {
  title: "components/TurnOverviewBox",
  component: TurnOverviewBoxStorybook,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    turn: {
      score: 10,
      betUsers: [
        { id: "1", name: "Test1", iconColor: 0, iconImage: 0 },
        { id: "2", name: "Test2", iconColor: 1, iconImage: 1 },
      ],
    },
  },
} satisfies Meta<typeof TurnOverviewBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HasFirstBetBonus: Story = {
  args: {
    hasFirstBetBonus: true,
  },
};

export const NoFirstBetBonus: Story = {
  args: {
    hasFirstBetBonus: false,
  },
};

export const MaxBetUsers: Story = {
  args: {
    hasFirstBetBonus: true,
    turn: {
      score: 10,
      betUsers: [
        { id: "1", name: "Test1", iconColor: 0, iconImage: 0 },
        { id: "2", name: "Test2", iconColor: 1, iconImage: 1 },
        { id: "3", name: "Test3", iconColor: 2, iconImage: 0 },
        { id: "4", name: "Test4", iconColor: 3, iconImage: 1 },
        { id: "5", name: "Test5", iconColor: 4, iconImage: 0 },
        { id: "6", name: "Test6", iconColor: 5, iconImage: 1 },
        { id: "7", name: "Test7", iconColor: 6, iconImage: 0 },
        { id: "8", name: "Test8", iconColor: 7, iconImage: 1 },
        { id: "9", name: "Test9", iconColor: 8, iconImage: 0 },
        { id: "10", name: "Test10", iconColor: 9, iconImage: 1 },
      ],
    },
  },
};
