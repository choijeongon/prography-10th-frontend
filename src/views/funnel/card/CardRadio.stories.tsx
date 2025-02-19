import { Meta, StoryObj } from "@storybook/react";
import { CardRadio } from "./CardRadio";

const meta = {
  title: "Funnel/Card/CardRadio",
  component: CardRadio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardRadio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: false,
    text: "옵션 텍스트",
    name: "radio-group",
    onChange: () => {},
  },
};
