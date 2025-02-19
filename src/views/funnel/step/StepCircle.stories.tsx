import { Meta, StoryObj } from "@storybook/react";
import { StepCircle } from "./StepCircle";

const meta = {
  title: "Funnel/Step/StepCircle",
  component: StepCircle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StepCircle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StepOne: Story = {
  args: {
    step: 1,
    isActive: true,
  },
};

export const StepTwo: Story = {
  args: {
    step: 2,
    isActive: false,
  },
};
