import { Meta, StoryObj } from "@storybook/react";
import { PGButton } from "./PGButton";

const meta = {
  title: "Components/Button/PGButton",
  component: PGButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof PGButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeButton: Story = {
  args: {
    width: "200px",
    height: "48px",
    backgroundColor: "#4696ff",
    label: "지원하기",
    fontColor: "white",
    disabled: false,
  },
};
