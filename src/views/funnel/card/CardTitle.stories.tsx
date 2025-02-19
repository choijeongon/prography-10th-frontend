import { Meta, StoryObj } from "@storybook/react";
import { CardTitle } from "./CardTitle";

const meta = {
  title: "Funnel/Card/CardTitle",
  component: CardTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "개인정보 수집 동의",
    description: "프로그라피 10기 지원을 위한 개인정보 수집 동의가 필요합니다.",
  },
};
