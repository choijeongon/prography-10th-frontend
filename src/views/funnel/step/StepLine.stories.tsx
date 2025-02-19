import { Meta, StoryObj } from "@storybook/react";
import { StepLine } from "./StepLine";

const meta = {
  title: "Funnel/Step/StepLine",
  component: StepLine,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof StepLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IsActive: Story = {
  args: {
    isActive: true,
    width: "36px",
  },
};

export const IsNotActive: Story = {
  args: {
    isActive: false,
    width: "36px",
  },
};
