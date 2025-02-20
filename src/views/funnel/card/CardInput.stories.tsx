import { Meta, StoryObj } from "@storybook/react";
import { CardInput } from "./CardInput";

const meta = {
  title: "Funnel/Card/CardInput",
  component: CardInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputType: "text",
    id: "input-id",
    label: "성함을 입력해주세요.",
    value: "",
    placeholder: "예시: 홍길동",
    isRequired: true,
    onChange: () => {},
  },
};
