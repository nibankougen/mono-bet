import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { BetButton, type BetButtonProps } from "./index";
import { useCallback, useEffect, useState } from "react";

const BetButtonStorybook = ({
  onClick,
  disabled,
  startTime,
  endTime,
}: BetButtonProps) => {
  const [storybookStartTime, setStorybookStartTime] = useState(startTime);
  const [storybookEndTime, setStorybookEndTime] = useState(endTime);

  const onClickStorybook = useCallback(() => {
    setStorybookStartTime(Date.now());
    setStorybookEndTime(Date.now() + 5000);
    onClick();
  }, [onClick]);

  useEffect(() => {
    setStorybookStartTime(startTime);
    setStorybookEndTime(endTime);
  }, [endTime, startTime]);

  return (
    <BetButton
      onClick={onClickStorybook}
      disabled={disabled}
      startTime={storybookStartTime}
      endTime={storybookEndTime}
    />
  );
};

const meta = {
  title: "components/BetButton",
  component: BetButtonStorybook,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn(), startTime: Date.now(), endTime: Date.now() + 5000 },
} satisfies Meta<typeof BetButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
