import { Meta, StoryObj } from "@storybook/react";
import { StepCard } from "./StepCard";

const meta = {
  title: "Funnel/Step/StepCard",
  component: StepCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StepCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StepOne: Story = {
  args: {
    step: 1,
  },
};

export const StepTwo: Story = {
  args: {
    step: 2,
  },
};

export const StepThree: Story = {
  args: {
    step: 3,
  },
};
